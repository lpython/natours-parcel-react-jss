import React from 'react';
import AnimatedButton from './AnimatedButton.jsx';

import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    root: {
        height: '85vh',
        backgroundImage: `linear-gradient(
            to right bottom, 
            ${convert(theme.colorPrimaryLight)}, 
            ${convert(theme.colorPrimaryDark)} ), 
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
                ${convert(theme.colorPrimaryLight)}, 
                ${convert(theme.colorPrimaryDark)} ),
                url('./images/hero-small.jpg')`
        },

        [theme.respond("phone")]: {
            clipPath: 'polygon(0 0, 100% 0, 100% 85vh, 0 100%)',
            '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 85vh, 0 100%)'
        },
    
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
}));

export default function Header() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <header className={classes.root} >
            <div className="logo-box">
                <img className="logo" src="./images/logo-white.png" alt="Logo" />
            </div>
            <div className="text-box">
                <CenterHeading/>
                <AnimatedButton
                    white
                    animated
                    text="Discover our tours"
                />
            </div>
        </header>
    );
}

const useCenterHeadingStyles = createUseStyles(theme => ({
    root: {
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
    
            [theme.respond("phone")]: {
                letterSpacing: '1.5rem',
            }
        }
        ,
        '& .sub': {
            display: 'block',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '1.75rem',
    
            animation: 'moveInRight 1s ease-out',
    
            [theme.respond("phone")]: {
                letterSpacing: '0.5rem',
            }
        }
    }
}))

function CenterHeading() {
    const theme = useTheme();
    const classes = useCenterHeadingStyles({ theme });

    return (
        <h1 className={classes.root} >
            <span className="main">Outdoors</span>
            <span className="sub">is where life happens</span>
        </h1>
    );
}