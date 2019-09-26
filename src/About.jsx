import React from 'react';
import RaisedButton from './RaisedButton.jsx';
import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

// import nat1Large from '../images/nat-1-large.jpg';
// import nat2Large from '../images/nat-2-large.jpg';
// import nat3Large from '../images/nat-3-large.jpg';

// import nat1Small from '../images/nat-1.jpg';
// import nat2Small from '../images/nat-2.jpg';
// import nat3Small from '../images/nat-3.jpg';

const useStyles = createUseStyles(theme => ({
    about: {
        backgroundColor: theme.colorGreyLight1,
        padding: '25rem 0',
        marginTop: '-20vh',
    
        // @include respond(tablet-portrait) {
        //     padding: 20rem 0;
        // }
    
        // @include respond(phone) {
        //     padding: 25rem 0;
        // }

        '& div.heading': { 
            textAlign: 'center', 
            marginBottom: '8rem !important'
        }
        ,
        '& p': { fontSize: '1.6rem' }
        ,
        '& p:not(:last-child)': { marginBottom: '3rem' }
        ,
        '& .composition': {
            position: 'relative',
            transition: 'all .2s',
        
            '& .photo': {
                width: '55%',
                boxShadow: `0 1.5rem 4rem ${convert(theme.colorBlack, 0.4)}`,
                borderRadius: '2px',
                position: 'absolute',
                "z-index": 10,
                transition: 'all .2s',
                outlineOffset: '2rem',
        
                // @include respond(tablet-portrait){
                //     position: relative,
                //     float: left !important,
                //     width: 33.333333%,
                //     boxShadow: 0 1rem 2rem rgba($color-black, .4),
                // }
        
                '&.p1': {
                    left: 0,
                    top: '-2rem',
        
                    // @include respond(tablet-portrait){
                    //     top: 1rem,
                    //     transform: scale(1.1),
                    // }
                }
                ,
                '&.p2': {
                    right: 0,
                    top: '2rem',
        
                    // @include respond(tablet-portrait){
                    //     top: -1rem,
                    //     transform: scale(1.3),
                    //     z-index: 199,
                    // }
                }
                ,
                '&.p3': {
                    left: '20%',
                    top: '10rem',
        
                    // @include respond(tablet-portrait){
                    //     top: 1rem,
                    //     left: 0,
                    //     transform: scale(1.1),
                    // }
                }
                ,
                '&:hover': {
                    outline: `1.5rem solid ${theme.colorPrimary}`,
                    transform: 'scale(1.05) translateY(-.5rem)',
                    boxShadow: `0 2.5rem 4rem ${convert(theme.colorBlack, .5)}`,
                    "z-index": 20,
                }
            }
            ,
            '&:hover .photo:not(:hover)': {
                transform: 'scale(.95)',
            }
        }
    }
}));

export default function About() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section className={classes.about}>
           <div className="heading">
               <h2 className="heading-secondary">
                   Exciting tours for adventurous people
               </h2>
           </div> 
           <div className="row">
               <div className="col-1-of-2">
                   <h3 className="margin-bottom-sm">
                       You're going to fall in love with nature
                   </h3>
                   <p >
                       Autem est sunt ut suscipit. Ipsum ab eius. Ipsa sint adipisci repudiandae consequatur sint illum. Sapiente nihil cum facere.
                   </p>
   
                   <h3 className="margin-bottom-sm">
                       Live adventurous like you never have before
                   </h3>
                   <p >
                       Vel voluptatem necessitatibus quis fugit sit est sed. Accusantium eaque nihil. Aut qui quo et repudiandae. Quo maxime nobis aut consequatur non sapiente quisquam exercitationem ad.
                   </p> 
   
                    <RaisedButton
                        text="Learn more &rarr;"
                    />
                   
               </div>
               <div className="col-1-of-2">
                   <div className="composition">
                        <img 
                            srcSet={`images/nat-1.jpg 300w, images/nat-1-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-1'
                            className="photo p1"
                            src="images/nat-1-large.jpg"
                        />

                        <img 
                            srcSet={`images/nat-2.jpg 300w, images/nat-2-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-2'
                            className="photo p2"
                            src="images/nat-2-large.jpg"
                        />

                        <img 
                            srcSet={`images/nat-3.jpg 300w, images/nat-3-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-3'
                            className="photo p3"
                            src="images/nat-3-large.jpg"
                        />
                   </div> 
               </div>
           </div>
        </section>
   );
}

