import React from 'react';
import {render} from 'react-dom';
import NatoursApp from './NatoursApp.jsx';

document.addEventListener('DOMContentLoaded', () => 
  render(<NatoursApp />, document.getElementById('app')));