import React from 'react';
import "./Canvas.css";
import WebcamStream from '../WebcamStream/WebcamStream';

const Canvas = () => {
    return (
        <div class="CanvasContainer">
            <WebcamStream />
            <img class="Canvas" src={'/video?type=blank'} alt="webcam" />
            {/* <img class="Canvas" src={'/video?type=camera'} alt="webcam" /> */}
        </div>
    );
};

export default Canvas;