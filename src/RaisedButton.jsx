import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    root: {
      '&:link, &:visited': {
        fontSize: theme.defaultFontSize,
        color: theme.colorPrimary,
        display: 'inline-block',
        textDecoration: 'none',
        borderBottom: `1px solid ${theme.colorPrimary}`,
        padding: '3px',
        transition: 'all .2s',
      }
      ,
      '&:hover': {
        backgroundColor: '#393',
        color: theme.colorWhite,
        boxShadow: `0 1rem 2rem ${convert(theme.colorBlack, 0.15)}`,
        transform: 'translateY(-2px)',
      }
      ,
      '&:active': {
        boxShadow: `0 .5rem 1rem ${convert(theme.colorBlack, 0.15)}`,
        transform: 'translateY(0)',
      }
    }
  // }
}));

export default function RaisedButton({ text = 'Button', href, className, raised = false, white = false, animated = false }) {
  // const { white = false, animated = false } = this.props; 
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <a
      href={href ? href : '#'}
      className={classes.root}
      // raised={raised.toString()}
      // white={white.toString()} animated={animated.toString()} 
    >
      {text}
    </a>
  );
}



