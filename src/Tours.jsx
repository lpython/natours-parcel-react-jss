import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import TourCard from './TourCard.jsx';
import AnimatedButton from './AnimatedButton.jsx';

const useStyles = createUseStyles(theme => ({
    root: {
        backgroundColor: theme.colorGreyLight1,
        padding: '25rem 0 15rem 0',
        marginTop: '-10rem',
    
        [theme.respond('tab-port')]: {
            padding: '20rem 0 10rem 0'
        }
    }
}));

export default function Tours() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <section className={classes.root} id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2>
                    Most popular tours
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <TourCard
                        heading="The sea explorer"
                        modifier="one"
                        list={["3 days tours", "Up to 30 people", "2 tour guides", "Sleep in cozy hotels", "Difficulty: easy"]}
                        price="$297"
                    />
                </div>
                <div className="col-1-of-3">
                    <TourCard
                        heading="The forest hiker"
                        modifier="two"
                        list={["7 days tours", "Up to 40 people", "6 tour guides", "Sleep in provided tents", "Difficulty: medium"]}
                        price="$497"
                    />
                </div>
                <div className="col-1-of-3">
                    <TourCard
                        heading="The snow adventurer"
                        modifier="three"
                        list={["5 days tours", "Up to 15 people", "3 tour guides", "Sleep in provided tents", "Difficulty: hard"]}
                        price="$897"
                    />  
                </div>
            </div>
            <div className="u-center-text u-margin-top-big">
                <AnimatedButton
                    green="true"
                    text="Discover all tours"
                />
            </div>
        </section>
    );
}
