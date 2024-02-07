// WebcamStream.jsx
import React, { useRef, useEffect } from 'react';
import './WebcamStream.css';
import '../Canvas/Canvas.css'

const WebcamStream = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const startVideoStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the camera:', error);
            }
        };

        startVideoStream();

        return () => {
            // Cleanup: Stop the video stream when the component unmounts
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []); // Run the effect only once on mount

    return (
        <video ref={videoRef} className="flipped Canvas" autoPlay playsInline />
    );
};

export default WebcamStream;
