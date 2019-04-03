import React from 'react';

import withStyles from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const styles = theme => ({

  headingSecondary: {
    color: 'transparent',
    display: 'inline-block',
    fontSize: '3.5rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '2px',

    backgroundImage: `linear-gradient(to right, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`,
    webkitBackgroundClip: text,

    transition: 'all .2s',

    '&:hover': {
        transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
        textShadow: `.5rem 1rem 2rem ${convert(theme.colorBlack, 0.2)}`,
    }

    // @include respond(tablet-portrait) {
    //     font-size: 3rem,
    // }

    // @include respond(phone) {
    //     font-size: 2.5rem,
    // }
  }
});

function Typography({}) {
  
  return (
    <>

    </>
  );
}