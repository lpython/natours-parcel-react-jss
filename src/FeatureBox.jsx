import React from 'react';

import withStyles from 'react-jss';
import Color from 'color';


const sentences = [
    'Blanditiis inventore culpa ut eveniet.',
    'Architecto autem eaque quidem illum ducimus.',
    'Sunt odit sunt placeat accusantium rerum voluptas aut consectetur voluptatem.',
    'Quas qui vitae corrupti.',
    'Quos fugiat et.'
];

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const styles = theme => ({
  
  featureBox: {
    backgroundColor: convert(theme.colorWhite, .8),
    fontSize: '1.5rem',
    padding: '2.5rem',
    textAlign: 'center',
    borderRadius: '3px',
    boxShadow: `0 1.5rem 4rem ${convert(theme.colorBlack, .15)}`,
    transition: 'transform .3s',

    // @include respond(tablet-portrait){
    //     padding: 2rem,
    // }

    '& > i': {
        fontSize: '6rem',
        marginBottom: '.5rem',
        display: 'inline-block',

        color: 'transparent',
        backgroundImage: `linear-gradient(
            to right, 
            ${theme.colorPrimaryLight}, 
            ${theme.colorPrimaryDark})`,
        "-webkit-background-clip": 'text',

        // @include respond(tablet-portrait){
        //    marginBottom: 0,
        //    fontSize: 5rem,
        // }
        
    }
    ,
    '&:hover': {
        transform: 'translateY(-1.5rem) scale(1.03)'
    }
  }
});



const FeatureBox = ({classes, iconClassName, heading}) => (
    <div className="col-1-of-4">
        <div className={classes.featureBox}> 
            <i className={iconClassName}></i> 
            <h3 className="heading-tertiary u-margin-bottom-small">
                {heading}
            </h3>
            <p className="feature-box__text">
                {sentences[getRandomInt(4)]}!
            </p>
        </div>
    </div>
);

export default withStyles(styles)(FeatureBox);