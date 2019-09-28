import React from 'react';
import { ThemeProvider } from 'react-jss';

import Body from './Body.jsx';

const theme = {
  // Colors
  colorPrimary: '#55c57a',
  colorPrimaryLight: '#7ed56f',
  colorPrimaryDark: '#28b485',

  colorSecondaryLight: '#ffb900',
  colorSecondaryDark: '#ff7730',

  colorTertiaryLight: '#2998ff',
  colorTertiaryDark: '#5643fa',

  colorGreyLight1: '#f7f7f7', 
  colorGreyLight2: '#eee',
  colorGreyDark: '#777',
  colorGreyDark2: '#999',
  colorGreyDark3: '#333',

  colorWhite: '#fff',
  colorBlack: '#000',

  // Grid
  gridWidth: '114rem',
  gutterVertical: '8rem',
  gutterVerticalSmall: '6rem',
  gutterHorizontal: '6rem',

  // Font-sizes:
  defaultFontSize: '1.6rem',

  // Functions
  respond: breakpoint => {
    return {
        phone: "@media only screen and (max-width: 37.5em)",          //600px
        "tab-port": "@media only screen and (max-width: 56.25em)",    //900px
        "tab-land": "@media only screen and (max-width: 75em)",       //1200px
        "big-desktop": "@media only screen and (min-width: 112.5em)"  //1800
      }[breakpoint];
  }
  
};

export default () => (
  <ThemeProvider theme={theme}>
    <Body />
  </ThemeProvider>
);
