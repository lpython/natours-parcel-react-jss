import React, { Fragment } from 'react';
// import About from './About';
// import Booking from './Booking';
// import Features from './Features';
// import Footer from './Footer';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
// import PopUp from './PopUp';
// import Stories from './Stories';
// import Tours from './Tours';

import injectSheet from 'react-jss';

const styles = {
    '@global': {
        '@keyframes moveInLeft': {
            "0%": {
              opacity: 0,
              transform: 'translateX(-10rem)',
            }
            ,
            "80%": {
              transform: 'translateX(1rem)',
            }
            ,
            "100%": {
              opacity: 1,
              transform: 'translate(0)',
            }
        }
        ,
        '@keyframes moveInRight': {
            "0%": {
              opacity: 0,
              transform: 'translateX(10rem)',
            }
            ,
            "80%": {
              transform: 'translateX(-1rem)',
          
            }
            ,
            "100%": {
              opacity: 1,
              transform: 'translate(0)',
            }
        }
        ,
        "@keyframes moveInBottom": {
            "0%": {
              opacity: 0,
              transform: 'translateY(3rem)'
            }
            ,          
            "100%": {
              opacity: 1,
              transform: 'translate(0)'
            }
        }
    }
};

const NatoursApp = () => (
    <Fragment>
        <Navigation/>
        <Header/>
        {/* <main> */}
            {/* <About/> */}
            {/* <Features/> */}
            {/* <Tours/> */}
            {/* <Stories/> */}
            {/* <Booking/> */}
            {/* <PopUp/> */}
        {/* </main> */}
        {/* <Footer/> */}
    </Fragment>
);

export default injectSheet(styles)(NatoursApp);
