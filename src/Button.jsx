import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

import withStyles from 'react-jss';
import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const styles = theme => ({
  btn: {
    '&, &:link, &:visited': {
      textTransform: 'uppercase',
      textDecoration: 'none',
      padding: '1.5rem 4rem',
      display: 'inline-block',
      borderRadius: '10rem',
      transition: 'all .2s',
      position: 'relative',
      fontSize: '1.6rem',

      // Change for the <button/> element

      border: 'none',
      cursor: 'pointer'
    }
    ,
    '&:hover': {
      transform: 'translateY(-.3rem)',
      boxShadow: `0 1rem 2rem ${convert(theme.colorBlack, 0.2)}`,

      '&::after': {
        transform: 'scaleX(1.4) scale(1.6)',
        opacity: 0,
      }
    }
    ,
    '&:active, &:focus': {
      outline: 'none',
      transform: 'translateY(-.1rem)',
      boxShadow: `0 0.5rem 1rem ${convert(theme.colorBlack, 0.2)}`,
    }
    ,
    '&[white]': {
      backgroundColor: theme.colorWhite,
      color: theme.colorGreyDark,

      '&::after': {
        backgroundColor: theme.colorWhite,
      }
    }
    ,
    '&[green]': {
      backgroundColor: theme.colorPrimary,
      color: theme.colorWhite,

      '&::after': {
        backgroundColor: theme.colorPrimary,
      }
    }
    ,
    '&::after': {
      content: `''`,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      borderRadius: '10rem',
      position: 'absolute',
      top: 0,
      left: 0,
      "z-index": -1,
      transition: 'all .4s',
    }
    ,
    '&[animated]': {
      animation: 'moveInBottom .5s ease-out .75s',
      animationFillMode: 'backwards',
    }
  }
  ,
  btnText: {
    '&:link, &:visited': {
      fontSize: '16px',
      color: '#292',
      display: 'inline-block',
      textDecoration: 'none',
      borderBottom: `1px solid ${theme.colorPrimary}`,
      padding: '3px',
      transition: 'all .2s',
    }
    ,
    '&:hover': {
      backgroundColor: '#393',
      color: '#FFF',
      boxShadow: `0 1rem 2rem ${convert(theme.colorBlack, 0.15)}`,
      transform: 'translateY(-2px)',
    }
    ,
    '&:active': {
      boxShadow: `0 .5rem 1rem ${convert(theme.colorBlack, 0.15)}`,
      transform: 'translateY(0)',
    }
  }
});

class Button extends React.Component {
    render(){
      const { white = false, animated = false } = this.props; 
      return (
            <a 
                href={this.props.href ? this.props.href : '#'}
                white={white.toString()}
                animated={animated.toString()}
                className={this.props.className + ' ' + this.props.classes.btn }
            >
                {this.props.text}
            </a>
        );
    }
}

export default withStyles(styles)(Button);

