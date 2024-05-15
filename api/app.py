from flask import Flask, Response, request
import enum
import cv2
import numpy as np
import mediapipe as mp
from collections import deque

app = Flask(__name__)

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)  # Accessing the default camera (index 0)

    def __del__(self):
        self.video.release()

    def GetVideoCapture(self):
        success, frame = self.video.read()
        return success, frame

class DisplayType(enum.Enum):
    WindowCameraDisplay = 1

def GenerateFrames(camera: VideoCamera, displayType: DisplayType):
    bpoints = [deque(maxlen=1024)]
    gpoints = [deque(maxlen=1024)]
    rpoints = [deque(maxlen=1024)]
    ypoints = [deque(maxlen=1024)]

    blue_index = 0
    green_index = 0
    red_index = 0
    yellow_index = 0

    colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (0, 255, 255)]

    mpHands = mp.solutions.hands
    hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
    mpDraw = mp.solutions.drawing_utils

    while True:
        success, frame = camera.GetVideoCapture()
        if not success:
            break

        frame = cv2.flip(frame, 1)

        if displayType == DisplayType.WindowCameraDisplay:
            frame = cv2.rectangle(frame, (40,1), (140,65), (0,0,0), 2)
            frame = cv2.rectangle(frame, (160,1), (255,65), (255,0,0), 2)
            frame = cv2.rectangle(frame, (275,1), (370,65), (0,255,0), 2)
            frame = cv2.rectangle(frame, (390,1), (485,65), (0,0,255), 2)
            frame = cv2.rectangle(frame, (505,1), (600,65), (0,255,255), 2)
            cv2.putText(frame, "CLEAR", (49, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2, cv2.LINE_AA)
            cv2.putText(frame, "BLUE", (185, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2, cv2.LINE_AA)
            cv2.putText(frame, "GREEN", (298, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2, cv2.LINE_AA)
            cv2.putText(frame, "RED", (420, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2, cv2.LINE_AA)
            cv2.putText(frame, "YELLOW", (520, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2, cv2.LINE_AA)
            
        result = hands.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

        if result.multi_hand_landmarks:
            landmarks = []
            for handslms in result.multi_hand_landmarks:
                for lm in handslms.landmark:
                    lmx = int(lm.x * frame.shape[1])
                    lmy = int(lm.y * frame.shape[0])
                    landmarks.append([lmx, lmy])

                mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)

            fore_finger = (landmarks[8][0], landmarks[8][1])
            center = fore_finger
            thumb = (landmarks[4][0], landmarks[4][1])

            if (thumb[1]-center[1] < 30):
                bpoints.append(deque(maxlen=512))
                blue_index += 1
                gpoints.append(deque(maxlen=512))
                green_index += 1
                rpoints.append(deque(maxlen=512))
                red_index += 1
                ypoints.append(deque(maxlen=512))
                yellow_index += 1

            elif center[1] <= 65:
                if 40 <= center[0] <= 140: # Clear Button
                    bpoints = [deque(maxlen=512)]
                    gpoints = [deque(maxlen=512)]
                    rpoints = [deque(maxlen=512)]
                    ypoints = [deque(maxlen=512)]
                    blue_index = 0
                    green_index = 0
                    red_index = 0
                    yellow_index = 0
                elif 160 <= center[0] <= 255:
                    colorIndex = 0 # Blue
                elif 275 <= center[0] <= 370:
                    colorIndex = 1 # Green
                elif 390 <= center[0] <= 485:
                    colorIndex = 2 # Red
                elif 505 <= center[0] <= 600:
                    colorIndex = 3 # Yellow
            else :
                if colorIndex == 0:
                    bpoints[blue_index].appendleft(center)
                elif colorIndex == 1:
                    gpoints[green_index].appendleft(center)
                elif colorIndex == 2:
                    rpoints[red_index].appendleft(center)
                elif colorIndex == 3:
                    ypoints[yellow_index].appendleft(center)

        points = [bpoints, gpoints, rpoints, ypoints]

        for i in range(len(points)):
            for j in range(len(points[i])):
                for k in range(1, len(points[i][j])):
                    if points[i][j][k - 1] is None or points[i][j][k] is None:
                        continue
                    cv2.line(frame, points[i][j][k - 1], points[i][j][k], colors[i], 2)

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video')
def LiveVideo():
    displayType = request.args.get('type', default='window', type=str)

    if (displayType == 'window'):
        return Response(GenerateFrames(VideoCamera(), displayType=DisplayType.WindowCameraDisplay),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
    else:
        return "Invalid display type."

if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=5000)