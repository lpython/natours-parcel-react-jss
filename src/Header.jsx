import React from 'react';
import Button from './Button.jsx';

import injectSheet from 'react-jss';


const styles = {
    header: {
        height: '85vh',
        backgroundImage: `linear-gradient(
            to right bottom, 
            rgba(126,213,111, 0.8), 
            rgba(40, 180, 133, 0.8)),
            url('./images/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        
        '@supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0))': {
            clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
            height: '95vh',
        }
        ,
        "@media only screen and (min-resolution: 192dpi) and (min-width: 37.5em), \
                (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em), \
                (min-width: 125em)": {
            backgroundImage: `linear-gradient(
                to right bottom, 
                rgba(126,213,111, 0.8), 
                rgba(40, 180, 133, 0.8)),
                url('./images/hero-small.jpg')`
        }
        ,
        // @include respond(phone) {
        //     -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%),
        //     clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%),
        // }
    
        '& .logo-box': {
            position: 'absolute',
            top: '4rem',
            left: '4rem'
        }
        ,
        '& .logo': {
            height: '3.5rem',
        }
        ,
        '& .text-box': {
            // @include center-hor-ver(40%, 50%),
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
        }
    }
    ,
    headingPrimary: {
        color: '#fff',
        textTransform: 'uppercase',
        backfaceVisibility: 'hidden',
        marginBottom: '6rem',
    
        '& .main': {
            display: 'block',
            fontSize: '6rem',
            fontWeight: 400,
            letterSpacing: '3.5rem',
    
            animationName: 'moveInLeft',
            animationDuration: '1s',
            animationTimingFunction: 'ease-out',
    
            // @include respond(phone) {
            //     letter-spacing: 1.5rem,
            // }
        }
        ,
        '& .sub': {
            display: 'block',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '1.75rem',
    
            animation: 'moveInRight 1s ease-out',
    
            // @include respond(phone) {
            //     letter-spacing: .5rem,
            // }
        }
    }
};

const Header = ({classes}) => (
    <header className={classes.header} >
        <div className="logo-box">
            <img className="logo" src="./images/logo-white.png" alt="Logo" />
        </div>
        <div className="text-box">
            <h1 className={classes.headingPrimary} >
                <span className="main">Outdoors</span>
                <span className="sub">is where life happens</span>
            </h1>
            <Button
                className="btn"
                white
                animated
                text="Discover our tours"
            />
        </div>
    </header>
);

export default injectSheet(styles)(Header);
