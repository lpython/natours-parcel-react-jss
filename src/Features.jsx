import React from 'react';
import FeatureBox from './FeatureBox'

import { createUseStyles, useTheme } from 'react-jss';

import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    features:  {
        padding: '20rem 0',
        backgroundImage: `linear-gradient(
            to right bottom, 
            ${convert(theme.colorPrimaryLight, 0.8)},
            ${convert(theme.colorPrimaryDark, 0.8)}),
            url('./images/nat-4.jpg')`,
        backgroundSize: 'cover',
        transform: 'skewY(-7deg)',
        marginTop: '-10rem',

        '& > *': {
            transform: 'skewY(7deg)',
        },

        [theme.respond("tab-port")]: {
            padding: '10rem 0',
        },

        '& i.icon-basic-world:before': { content: `"\\e028"` },
        '& i.icon-basic-compass:before': { content: `"B"` },
        '& i.icon-basic-map:before': { content: `"+"` },
        '& i.icon-basic-heart:before': { content: `"W"` },
    }
}));

export default function Features() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section className={classes.features}>
            <div className="row">
                <FeatureBox
                    iconClassName="icon-basic-world"
                    heading="Explore the world"
                />
                <FeatureBox
                    iconClassName="icon-basic-compass"
                    heading="Meet the nature"
                />
                <FeatureBox
                    iconClassName="icon-basic-map"
                    heading="Find your way"
                />
                <FeatureBox
                    iconClassName="icon-basic-heart"
                    heading="Live a healthier life"
                />
            </div>
        </section>
    );
}
