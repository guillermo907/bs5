import React from 'react';

const Banner = (props) => {

    return (
        <div className="container-fluid text-white p-4 d-flex align-items-center text-center 
        justify-content-center bannerContainer tema">
            <div>
                <h1>{props.title}</h1>
                <button className="btn btn-outline-light">{props.btnTitle}</button>
            </div>
        </div>
    );
}

export default Banner;