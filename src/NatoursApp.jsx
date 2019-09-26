import React, { Fragment } from 'react';
import About from './About.jsx';
// import Booking from './Booking';
import Features from './Features.jsx';
// import Footer from './Footer';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
// import PopUp from './PopUp';
// import Stories from './Stories';
import Tours from './Tours.jsx';

import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
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
        h2: {
            color: 'transparent',
            display: 'inline-block',
            fontSize: '3.5rem',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '2px',

            backgroundImage: `linear-gradient(to right, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`,
            "-webkit-background-clip": 'text',

            transition: 'all .2s',

            '&:hover': {
                transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
                textShadow: `.5rem 1rem 2rem ${convert(theme.colorBlack, 0.2)}`,
            }
        }
        ,
        h3: {
            fontSize: theme.defaultFontSize,
            fontWeight: 700,
            textTransform: 'uppercase',
        }
        ,
        '@font-face': {
            fontFamily: "linea-basic-10",
            src: `url("./fonts/linea-basic-10.eot?#iefix") format("embedded-opentype"),
                url("./fonts/linea-basic-10.woff") format("woff"),
                url("./fonts/linea-basic-10.ttf") format("truetype"),
                url("./fonts/linea-basic-10.svg#linea-basic-10") format("svg")`,
            fontWeight: 'normal',
            fontStyle: 'normal'

        }
        ,
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
        }
        ,
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
        }
        ,
        '.red': { backgroundColor: 'red' }
        ,
        '.row': {
            maxWidth: theme.gridWidth,
            margin: '0 auto',

            "&:not(:last-child)": {
                marginBottom: theme.gutterVertical,

                [theme.respond("tab-port")]: {
                    marginBottom: theme.gutterVerticalSmall
                }
            }
            ,
            // @include respond(tablet-portrait){
            //     maxWidth: 50rem,
            //     padding: 0 3rem,
            // }
            [theme.respond("tab-port")]: {
                maxWidth: '50rem',
                padding: '0 3rem'
            }
            ,
            // @include clearfix,
            '&::after': {
                content: `''`,
                display: 'table',
                clear: 'both'
            }
            ,
            // It selects all classes with name starting col-
            "& [class^='col-']": {
                float: 'left',

                "&:not(:last-child)": {
                    marginRight: theme.gutterHorizontal,

                    // @include respond(tablet-portrait){
                    //     marginRight: 0 !important,
                    //     marginBottom: $gutter-vertical-small,
                    // }
                    
                    [theme.respond("tab-port")]: {
                        marginRight: 0,
                        marginBottom: theme.gutterVerticalSmall
                    }
                }
                ,
                // @include respond(tablet-portrait){
                //     width: 100% !important,
                // }
                [theme.respond("tab-port")]: {
                    width: '100% !important'
                }
            }
            ,
            '& .col-1-of-2': {
                width: `calc((100% - ${theme.gutterHorizontal}) / 2)`,
            }
            ,
            '& .col-1-of-3': {
                width: `calc((100% - 2 * ${theme.gutterHorizontal}) / 3)`,
            }
            ,
            '& .col-2-of-3': {
                width: `calc(2 * ((100% - 2 * ${theme.gutterHorizontal}) / 3) + ${theme.gutterHorizontal})`,
            }
            ,
            '& .col-1-of-4': {
                width: `calc((100% - 3 * ${theme.gutterHorizontal}) / 4)`,
            }
            ,
            '& .col-2-of-4': {
                width: `calc(2 * ((100% - 3 * ${theme.gutterHorizontal}) / 4) + ${theme.gutterHorizontal})`,
            }
            ,
            '& .col-3-of-4:': {
                width: `calc( 100% - ${theme.gutterHorizontal} - (100% - 3 * ${theme.gutterHorizontal}) / 4)`,
            }
        }

        ,
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
                {/* <Stories/> */}
                {/* <Booking/> */}
                {/* <PopUp/> */}
            </main>
            {/* <Footer/> */}
        </Fragment>
    );
}
