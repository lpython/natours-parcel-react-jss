import React, { Fragment } from 'react';
import { useTheme } from 'react-jss';

import createUseGlobalStyles from './globalStyleSheet.js';

import Navigation from './Navigation.jsx';
import Header from './Header.jsx';

import About from './About.jsx';
import Features from './Features.jsx';
import Tours from './Tours.jsx';
import Stories from './Stories.jsx';
import Booking from './Booking.jsx';
import PopUp from './PopUp.jsx';

import Footer from './Footer';

const useGlobalStyles = createUseGlobalStyles();

export default function Body() {
    const theme = useTheme();
    useGlobalStyles({ theme });

    return (
        <>
            <Navigation />
            <Header />
            <main>
                <About />
                <Features />
                <Tours />
                <Stories/>
                <Booking/>
                <PopUp/>
            </main>
            <Footer/>
        </>
    );
}
