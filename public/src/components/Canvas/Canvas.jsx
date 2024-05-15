import React from 'react';
import "./Canvas.css";
import WebcamStream from '../WebcamStream/WebcamStream';

const Canvas = () => {
     const ipWebcamUrl = 'http://192.168.157.53:8080/video?type=blank'; // Replace 'YOUR_IP_WEBCAM_URL' with the actual IP Webcam URL

    return (
        <div className="CanvasContainer">
            <img className="Canvas inverted" src={ipWebcamUrl} alt="webcam" />
            <WebcamStream/>
        </div>
    );
};

export default Canvas;
