import React from 'react';
import "./Canvas.css";

const Canvas = () => {
    return (
        <div class="CanvasContainer">
            <img class="Canvas" src={'/video?type=camera'} alt="webcam" />
            <img class="Canvas" src={'/video?type=blank'} alt="webcam" />
        </div>
    );
};

export default Canvas;