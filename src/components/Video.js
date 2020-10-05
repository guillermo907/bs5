import React from 'react';

const Video = (props) => {
    return (
        <div className="container-fluid text-white videoContainer text-center align-items-center justify-content-center">
            <div className="videoInnerContainer">
                <video autoPlay muted loop id="video">
                    <source src={props.videoUrl} type="video/mp4"/>
                    You browser dont support no shit man....
                </video> 
                <content className="contentContainer">
                    <h1>Banner</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="btn btn-primary">Go</button>
                </content>
            </div>
        </div>
    );
}

export default Video;

