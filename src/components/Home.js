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
            <Video videoUrl="https://sitiopruebavero.000webhostapp.com/downloads/Fender%20CP50s%20-%20Cm%20Jam..mp4" />
        </Fragment>
    );
}

export default Home;