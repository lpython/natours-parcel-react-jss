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
    "*, *::after, *::before": {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit'
    }
    ,
    html: {
      fontSize: '62.5%', // 1rem = 10px

      "@media only screen and (max-width: 75em)": {
        fontSize: '56.25%'
      }  
    }
    ,
    body: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      // font-size: 16px,
      lineHeight: 1.7,
      color: '#777',
      boxSizing: 'border-box',
      padding: '3rem'

      // @include respond(tablet-portrait) {
      //     padding: 0;
      // }
    }
    ,
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
