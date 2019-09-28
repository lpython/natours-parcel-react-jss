import React from 'react';
import NavIcon from './NavIcon.jsx';

import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    root: {
        '& input[type=checkbox]' : {
            display: 'none'
        },

        '& label' : {
            backgroundColor: '#FFF',
            height: '7rem',
            width: '7rem',
            position: 'fixed',
            top: '6rem',
            right: '6rem',
            borderRadius: '50%',
            'z-index': 2000,
            boxShadow: `0 1rem 3rem ${convert(theme.colorBlack, 0.1)}`,
            textAlign: 'center',
            cursor: 'pointer',
    
            [theme.respond('tablet-portrait')]: {
                top: '3rem',
                right: '3rem',
            },
    
            [theme.respond('phone')]: {
                height: '5rem',
                width: '5rem'
            }    
        },

        '& .background' : {
            height: '6rem',
            width: '6rem',
            borderRadius: '50%',
            position: 'fixed',
            top: '6.5rem',
            right: '6.5rem',
            backgroundImage: `radial-gradient(${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`,
            zIndex: 1000,
            transition: 'transform .8s cubic-bezier(0.86, 0, .07, 1)',
    
            // @include respond(tablet-portrait) {
            //     top: 3.5rem,
            //     right: 3.5rem,
            // }
    
            // @include respond(phone) {
            //     height: 4rem,
            //     width: 4rem,
            // }
        },

        '& .nav' : {
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            'z-index': 1500,
            opacity: 0,
            width: '0%',
            transition: 'all .8s cubic-bezier(.68, -.55, .265, 1.55 )',

            '& ul' : {
                // @include center-hor-ver,
                listStyle: 'none',
                textAlign: 'center',
                width: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',

                '& li' : {
                    margin: '1rem',

                    '& a' : {
                        '&:link, &:visited': {
                            display: 'inline-block',
                            fontSize: '3rem',
                            fontWeight: 300,
                            padding: '1rem 2rem',
                            color: theme.colorWhite,
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                
                            backgroundImage: `linear-gradient(
                                120deg,
                                transparent 0%,
                                transparent 50%,
                                ${theme.colorWhite} 50%
                            )`,
                            backgroundSize: '230%',
                            transition: 'all .4s',
                        },

                        "& span": {
                            marginRight: '1.5rem',
                            display: 'inline-block'
                        },

                        '&:hover, &:active':  {
                            backgroundPosition: '100%',
                            color: theme.colorPrimary,
                            transform: 'translateX(1rem)', 
                        }
                    }
                }
            }
        },

        // Functionality
    
        '& input[type=checkbox]:checked ~ .background': {
            transform: 'scale(80)'
        }
        ,
        '& input[type=checkbox]:checked ~ .nav': {
            opacity: 1,
            width: '100%'
        }
        ,
        // TODO move to navicon.jsx
        // Icon
    
        '& .icon': {
            position: 'relative',
            marginTop: '3.5rem',

            [theme.respond('phone')]: {
                marginTop: '2.5rem'
            },

            '&, &::before, &::after': {
                width: '3rem',
                height: '2px',
                backgroundColor: theme.colorGreyDark3,
                display: 'inline-block',
            },            
    
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                transition: 'all .2s',
            },

            '&::before': {
                top: '-.8rem',
            },
            
            '&::after': {
               top: '.8rem', 
            }
        }
        ,
        '& label:hover .icon:before': {
            top: '-1rem',
        }
        ,
        '& label:hover .icon:after': {
            top: '1rem',
        }
        ,
        '& input[type=checkbox]:checked + label .icon ': {
            backgroundColor: 'transparent',
        }
        ,
        '& input[type=checkbox]:checked + label .icon:before': {
            top: 0,
            transform: 'rotate(135deg)',
        }
        ,
        '& input[type=checkbox]:checked + label .icon:after': {
            top: 0,
            transform: 'rotate(-135deg)',
        }
    }
}));

const links = [
    "About Natous",
    "Your benfits",
    "Popular tours",
    "Stories",
    "Book now"
];

export default function Navigation() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.root}>
            <input type="checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle">
                <span className="icon">&nbsp;</span>
            </label>
            <div className="background">
                &nbsp;
            </div>
            <nav className="nav">
                <ul>
                    { links.map((v, i) => (
                        <li key={i}>
                            <a href="#">
                                <span> {i+1} </span> {v}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}