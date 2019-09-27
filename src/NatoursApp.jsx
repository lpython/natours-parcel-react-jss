import React, { Fragment } from 'react';
import About from './About.jsx';
import Features from './Features.jsx';
// import Footer from './Footer';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
// import PopUp from './PopUp';
import Tours from './Tours.jsx';
import Stories from './Stories.jsx';
import Booking from './Booking.jsx';


import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    '@global': {
        // --- Top level ---
        "*, *::after, *::before": {
            margin: 0,
            padding: 0,
            boxSizing: 'inherit'
        },

        "::selection": {
            backgroundColor: theme.colorPrimary,
            color: theme.colorWhite
        },

        html: {
            fontSize: '62.5%', // 1rem = 10px

            [theme.respond("tab-land")]: { fontSize: '56.25%' },
            [theme.respond("tab-port")]: { fontSize: '50%' },
            [theme.respond("big-desktop")]: { fontSize: '75%' }
        },

        body: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            // font-size: 16px,
            lineHeight: 1.7,
            color: theme.colorGreyDark,

            boxSizing: 'border-box',
            padding: '3rem',

            [theme.respond("tab-port")]: { padding: 0 }
        },
        
        // --- Typography ---
        h2: {
            
            fontSize: '3.5rem',
            textTransform: 'uppercase',
            fontWeight: 700,
            display: 'inline-block',
            backgroundImage: `linear-gradient(to right, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`,
            "-webkit-background-clip": 'text',
            color: 'transparent',
            letterSpacing: '.2rem',
            transition: 'all .2s',

            [theme.respond("tab-port")]: { fontSize: '3rem' },
            [theme.respond("phone")]: { fontSize: '2.5rem' },

            '&:hover': {
                transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
                textShadow: `.5rem 1rem 2rem ${convert(theme.colorBlack, 0.2)}`,
            }
        },
        
        h3: {
            fontSize: theme.defaultFontSize,
            fontWeight: 700,
            textTransform: 'uppercase',
        },

        '@font-face': {
            fontFamily: "linea-basic-10",
            src: `url("./fonts/linea-basic-10.eot?#iefix") format("embedded-opentype"),
                url("./fonts/linea-basic-10.woff") format("woff"),
                url("./fonts/linea-basic-10.ttf") format("truetype"),
                url("./fonts/linea-basic-10.svg#linea-basic-10") format("svg")`,
            fontWeight: 'normal',
            fontStyle: 'normal'

        },

        '[data-icon]:before': {
            fontFamily: '"linea-basic-10" !important',
            content: 'attr(data-icon)',
            fontStyle: 'normal !important',
            fontWeight: 'normal !important',
            fontVariant: 'normal !important',
            textTransform: 'none !important',
            speak: 'none',
            lineHeight: 1,
            "-webkit-font-smoothing": 'antialiased',
            "-moz-osx-font-smoothing": 'grayscale'
        },

        '[class^="icon-"]:before, [class*=" icon-"]:before': {
            fontFamily: '"linea-basic-10" !important',
            fontStyle: 'normal !important',
            fontWeight: 'normal !important',
            fontVariant: 'normal !important',
            textTransform: 'none !important',
            speak: 'none',
            lineHeight: 1,
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        },

        // Grid
        '.row': {
            maxWidth: theme.gridWidth,
            margin: '0 auto',

            "&:not(:last-child)": {
                marginBottom: theme.gutterVertical,

                [theme.respond("tab-port")]: {
                    marginBottom: theme.gutterVerticalSmall
                }
            },
           
            [theme.respond("tab-port")]: {
                maxWidth: '50rem',
                padding: '0 3rem'
            },

            // @include clearfix,
            '&::after': {
                content: `''`,
                display: 'table',
                clear: 'both'
            },

            "& [class^='col-']": {
                float: 'left',

                "&:not(:last-child)": {
                    marginRight: theme.gutterHorizontal,

                    [theme.respond("tab-port")]: {
                        marginRight: 0,
                        marginBottom: theme.gutterVerticalSmall
                    }
                },
             
                [theme.respond("tab-port")]: {
                    width: '100% !important'
                }
            },

            '& .col-1-of-2': {
                width: `calc((100% - ${theme.gutterHorizontal}) / 2)`,
            },
            '& .col-1-of-3': {
                width: `calc((100% - 2 * ${theme.gutterHorizontal}) / 3)`,
            },
            '& .col-2-of-3': {
                width: `calc(2 * ((100% - 2 * ${theme.gutterHorizontal}) / 3) + ${theme.gutterHorizontal})`,
            },
            '& .col-1-of-4': {
                width: `calc((100% - 3 * ${theme.gutterHorizontal}) / 4)`,
            },
            '& .col-2-of-4': {
                width: `calc(2 * ((100% - 3 * ${theme.gutterHorizontal}) / 4) + ${theme.gutterHorizontal})`,
            },
            '& .col-3-of-4:': {
                width: `calc( 100% - ${theme.gutterHorizontal} - (100% - 3 * ${theme.gutterHorizontal}) / 4)`,
            }
        },

        /** Animations */
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
        },
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
        },
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
        },
        
        // Utilities
        ".u-center-text": { textAlign: 'center !important' },

        ".u-margin-bottom-small": { marginBottom: '1.5rem !important' }, 
        ".u-margin-bottom-medium": { 
            marginBottom: '4rem !important',

            [theme.respond("tab-port")]: {
                marginBottom: '3rem !important'
            }
        },
        ".u-margin-bottom-big": { 
            marginBottom: '8rem !important',

            [theme.respond("tab-port")]: {
                marginBottom: '5rem !important'
            }
        },
        ".u-margin-top-big": { marginTop: '8rem !important' },
        ".u-margin-top-huge": { marginTop: '10rem !important' },

        '.red': { backgroundColor: 'red' }

    }
}));

export default function NatoursApp() {
    const theme = useTheme();
    useStyles({ theme });

    return (
        <Fragment>
            <Navigation />
            <Header />
            <main>
                <About />
                <Features />
                <Tours />
                <Stories/>
                <Booking/>
                {/* <PopUp/> */}
            </main>
            {/* <Footer/> */}
        </Fragment>
    );
}
