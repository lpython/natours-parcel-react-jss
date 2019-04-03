import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import injectSheets from 'react-jss';

const styles = {
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
      boxShadow: '0 1rem 2rem rgba(255,255,255,.2)',

      '&::after': {
        transform: 'scaleX(1.4) scale(1.6)',
        opacity: 0,
      }
    }
    ,
    '&:active, &:focus': {
      outline: 'none',
      transform: 'translateY(-.1rem)',
      boxShadow: '0 0.5rem 1rem rgba(255,255,255, .2)',
    }
    ,
    'white': {
      backgroundColor: '#FFF',
      color: '#222',

      '&::after': {
        backgroundColor: '#DDD',
      }
    }
    ,
    '&--green': {
      backgroundColor: "#292",
      color: '#111',

      '&::after': {
        backgroundColor: "#292",
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
    '&--animated': {
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
      borderBottom: '1px solid #292',
      padding: '3px',
      transition: 'all .2s',
    }
    ,
    '&:hover': {
      backgroundColor: '#393',
      color: '#FFF',
      boxShadow: '0 1rem 2rem #FFF2',
      transform: 'translateY(-2px)',
    }
    ,
    '&:active': {
      boxShadow: '0 .5rem 1rem #FFF2',
      transform: 'translateY(0)',
    }
  }
};


class Button extends React.Component {
    render(){
        return (
            <a 
                href={this.props.href ? this.props.href : '#'}
                className={this.props.className + ' ' + this.props.classes.btn }
            >
                {this.props.text}
            </a>
        );
    }
}

export default injectSheets(styles)(Button);

