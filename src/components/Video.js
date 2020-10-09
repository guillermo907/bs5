import React from 'react';

const Video = (props) => {
    return (
        <div className="container-fluid videoContainer text-center text-white p-0 align-items-center justify-content-center" id="videoContainer">
            <div className="videoInnerContainer text-center align-items-center justify-content-center tema light">
                <video autoPlay muted loop id="video">
                    <source src={props.videoUrl} type="video/mp4"/>
                    You browser dont support no shit man....
                </video> 
                <content className="contentContainer p-5">
                    <h1>Video Banner</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="btn btn-outline-light">Go</button>
                </content>
            </div>
        </div>
    );
}

export default Video;

