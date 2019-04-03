import React from 'react';
import {render} from 'react-dom';
import withStyles, { ThemeProvider } from 'react-jss';

import NatoursApp from './NatoursApp.jsx';

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

  defaultFontSize: '1.6rem'
}

document.addEventListener('DOMContentLoaded', () => render(
  <ThemeProvider theme={theme}>
    <NatoursApp />
  </ThemeProvider>
  ,
  document.getElementById('app')));