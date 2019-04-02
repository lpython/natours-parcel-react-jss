import React from 'react';
import NavLinks from './NavLinks.jsx';
import NavIcon from './NavIcon.jsx';

import injectSheet from 'react-jss';

const styles = {
    navigation: {
        '& .checkbox' : {
            display: 'none'
        }
        ,
        '& .button' : {
            backgroundColor: '#FFF',
            height: '7rem',
            width: '7rem',
            position: 'fixed',
            top: '6rem',
            right: '6rem',
            borderRadius: '50%',
            'z-index': 2000,
            boxShadow: '0 1rem 3rem rgba(#000, .1)',
            textAlign: 'center',
            cursor: 'pointer',
    
            // @include respond(tablet-portrait) {
            //     top: 3rem,
            //     right: 3rem,
            // }
    
            // @include respond(phone) {
            //     height: 5rem,
            //     width: 5rem,
            // }
    
        }
        ,
        '& .background' : {
            height: '6rem',
            width: '6rem',
            borderRadius: '50%',
            position: 'fixed',
            top: '6.5rem',
            right: '6.5rem',
            backgroundImage: 'radial-gradient(#123, #FED)',
            'z-index': 1000,
            transition: 'transform .8s cubic-bezier(0.86, 0, .07, 1)',
    
            // @include respond(tablet-portrait) {
            //     top: 3.5rem,
            //     right: 3.5rem,
            // }
    
            // @include respond(phone) {
            //     height: 4rem,
            //     width: 4rem,
            // }
        }
        ,
        '& .nav' : {
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            'z-index': 1500,
            opacity: 0,
            width: '0%',
            transition: 'all .8s cubic-bezier(.68, -.55, .265, 1.55 )',
        }
        ,
        '& .list' : {
            // @include center-hor-ver,
            listStyle: 'none',
            textAlign: 'center',
            width: '100%'
        }
        ,
        '& .item' : {
            margin: '1rem'
        }
        ,
        '& .link' : {
            '&:link, &:visited': {
                display: 'inline-block',
                fontSize: '3rem',
                fontWeight: 300,
                padding: '1rem 2rem',
                color: '#FFF',
                textDecoration: 'none',
                textTransform: 'uppercase',
    
                backgroundImage: `linear-gradient(
                    120deg,
                    transparent 0%,
                    transparent 50%,
                    #FFF 50%
                )`,
                backgroundSize: '230%',
                transition: 'all .4s',
            }
            ,
            '&:hover, &:active':  {
                backgroundPosition: '100%',
                color: '#998',
                transform: 'translateX(1rem)', 
            }
        }
        ,
        // Functionality
    
        '& .checkbox:checked ~ & .background': {
            transform: 'scale(80)'
        }
        ,
        '& .checkbox:checked ~ &.nav': {
            opacity: 1,
            width: '100%'
        }
        ,
        // Icon
    
        '& .icon': {
            position: 'relative',
            marginTop: '3.5rem',
            '&, &::before, &::after': {
                width: '3rem',
                height: '2px',
                backgroundColor: '#234',
                display: 'inline-block',
            }
            ,
            // @include respond(phone) {
            //     margin-top: 2.5rem,
            // }
    
            '&::before, &::after': {
                content: '',
                position: 'absolute',
                left: 0,
                transition: 'all .2s',
            }
            ,
            '&::before': {
                top: '-.8rem',
            }
            ,
            '&::after': {
               top: '.8rem', 
            }
        }
        ,
        '& .button:hover & .icon:before': {
            top: '-1rem',
        }
        ,
        '& .button:hover & .icon:after': {
            top: '1rem',
        }
        ,
        '& .checkbox:checked + & .button & .icon ': {
            backgroundColor: 'transparent',
        }
        ,
        '& .checkbox:checked + & .button & .icon:before': {
            top: 0,
            transform: 'rotate(135deg)',
        }
        ,
        '& .checkbox:checked + & .button & .icon:after': {
            top: 0,
            transform: 'rotate(-135deg)',
        }
    }
}


const Navigation = ({classes}) => (
    <div className={classes.navigation}>
        <NavIcon/>
        <div className="background">
            &nbsp;
        </div>
        <nav className="nav">
            <NavLinks
                listClass="list"
                itemClass="item"
                linkClass="link"
                linksNames={[
                    "About Natours",
                    "Your Benefits",
                    "Popular Tours",
                    "Stories",
                    "Book Now"
                ]}
            />
        </nav>
    </div>
);

export default injectSheet(styles)(Navigation);