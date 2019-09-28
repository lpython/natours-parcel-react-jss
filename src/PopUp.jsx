import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';
import AnimatedButton from './AnimatedButton';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    popup: {
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: convert(theme.colorBlack, .8),
        zIndex: 9999,
        opacity: 0,
        visibility: 'hidden',
        transition: 'all .3s',

        "@supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))": {
            "-webkit-backdrop-filter": 'blur(10px)',
            backdropFilter: 'blur(10px)',
            backgroundColor: convert(theme.colorBlack, .3),
        },

        "& .content": {
            position: 'absolute',
            top: '50%',
            left: '50%',
            // transform: 'translate(-50%, -50%)',

            width: '75%',
            backgroundColor: theme.colorWhite,
            boxShadow: '0 2rem 4rem ' + convert(theme.colorBlack, .2),
            borderRadius: '3px',
            display: 'table',
            overflow: 'hidden',
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(.25)',
            transition: 'all .5s .2s',
        },

        "& .left": {
            width: '33.333333%',
            display: 'table-cell',

            "& img": {
                display: 'block',
                width: '100%'
            }
        },

        "& .right": {
            width: '66.6666667%',
            display: 'table-cell',
            verticalAlign: 'middle',
            padding: '3rem 5rem',

            "& .text": {
                fontSize: '1.4rem',
                marginBottom: '4rem',
    
                "-moz-column-count": 2,
                "-moz-column-gap": '4rem', //1em = 14px,
                "-moz-column-rule": '1px solid ' + theme.colorGreyLight2,
    
                columnCount: 2,
                columnGap: '4rem', //1em = 14px,
                columnRule: '1px solid ' + theme.colorGreyLight2,
    
                "-moz-hyphens": 'auto',
                "-ms-hyphens": 'auto',
                "-webkit-hyphens": 'auto',
                "hyphens": 'auto',
            },

            "& .close": {
                "&:link, &:visited": {
                    color: theme.colorGreyDark,
                    position: 'absolute',
                    top: '2.5rem',
                    right: '2.5rem',
                    fontSize: '3rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all .2s',
                    lineHeight: 1
                },
    
                "&:hover": {
                    color: theme.colorPrimary,
                }
            }
        },   

        //Open states
        "&:target": {
            opacity: 1,
            visibility: 'visible'
        },

        "&:target .content": {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)'
        }
    }
}));

export default function Popup() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.popup} id="popup"> 
        <div className="content">
            <div className="left">
                <img src="images/nat-8.jpg" alt="Tour photo"/>
                <img src="images/nat-9.jpg" alt="Tour photo"/>
            </div>
            <div className="right">
                <a href="#section-tours" className="close">&times;</a>
                <h2 className="u-margin-bottom-small">Start booking now</h2>
                <h3 className="u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                    amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                    sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                    gravida cum sociis natoque penatibus et.
                </p>
                <AnimatedButton green="true" text="Book now"/>
            </div>
        </div>
    </div>
  );
}