import React, { Fragment } from 'react';
import Banner from './Banner';
import Infobar from './Infobar';
import FormBanner from './FormBanner';
import Video from './Video';


const Home = () => {
    return (
        <Fragment>
            <Banner title="Desarrollo web" btnTitle="Go"/>
            <Infobar />
            <FormBanner /> 
            <Video videoUrl="https://sitiopruebavero.000webhostapp.com/downloads/The%20McCarty%20%20PRS%20Guitars.mp4" />
        </Fragment>
    );
}

export default Home;