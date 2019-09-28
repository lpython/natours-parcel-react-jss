import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

import AnimatedButton from './AnimatedButton.jsx';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    root: {
        // FUNCTIONALITY
        perspective: '150rem',
        '-moz-perspective': '150rem',
        position: 'relative',
        height: '52rem',
        
        "& .side": {
            height: '52rem',
            transition: 'all .8s ease',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            "-webkit-backface-visibility": 'hidden',
            backfaceVisibility: 'hidden',
            borderRadius: '3px',
            overflow: 'hidden',
            boxShadow: `0 1.5rem 4rem ${convert(theme.colorBlack, .15)}`,

            "&.front": {
                backgroundColor: theme.colorWhite
            },

            "&.back": {
                transform: 'rotateY(180deg)',

                "&.one": {
                    backgroundImage: `linear-gradient(to right bottom, ${theme.colorSecondaryLight}, ${theme.colorSecondaryDark})`
                },

                "&.two": {
                    backgroundImage: `linear-gradient(to right bottom, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`
                },

                "&.three": {
                    backgroundImage: `linear-gradient(to right bottom, ${theme.colorTertiaryLight}, ${theme.colorTertiaryDark})`
                }
            }
        },    

        "&:hover .side.front": {
            transform: 'rotateY(-180deg)'
        },

        "&:hover .side.back": {
            transform: 'rotateY(0)'
        },

        // FRONT SIDE STYLING
        "& .picture": {
            backgroundSize: 'cover',
            height: '23rem',
            backgroundBlendMode: 'screen',
            "-webkit-clip-path": 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
            
            "&.one": {
                backgroundImage: `linear-gradient(to right bottom, ${theme.colorSecondaryLight}, ${theme.colorSecondaryDark}), 
                    url(images/nat-5.jpg)`
            },

            "&.two": {
                backgroundImage: `linear-gradient(to right bottom, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark}), 
                    url(images/nat-6.jpg)`
            },

            "&.three": {
                backgroundImage: `linear-gradient(to right bottom, ${theme.colorTertiaryLight}, ${theme.colorTertiaryDark}), 
                    url(images/nat-7.jpg)`
            }
        },

        "& .heading": {
            fontSize: '2.8rem',
            fontWeight: 300,
            textTransform: 'uppercase',
            textAlign: 'right',
            color: theme.colorWhite,
            position: 'absolute',
            top: '12rem',
            right: '2rem',
            width: '75%',

            "& span": {
                padding: '1rem 1.5rem',
                "-webkit-box-decoration-break": 'clone',
                boxDecorationBreak: 'clone',
    
                "&.one": {
                    backgroundImage: `linear-gradient(to right bottom, 
                        ${convert(theme.colorSecondaryLight, 0.85)},
                        ${convert(theme.colorSecondaryDark, 0.85)} )`
                },
    
                "&.two": {
                    backgroundImage: `linear-gradient(to right bottom, 
                        ${convert(theme.colorPrimaryLight, 0.85)},
                        ${convert(theme.colorPrimaryDark, 0.85)} )`
                },
    
                "&.three": {
                    backgroundImage: `linear-gradient(to right bottom, 
                        ${convert(theme.colorTertiaryLight, 0.85)},
                        ${convert(theme.colorTertiaryDark, 0.85)} )`
                }
            }
        },

        "& .details": {
            padding: '3rem',

            "& ul": {
                listStyle: 'none',
                width: '80%',
                margin: '0 auto',

                "& li": {
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    padding: '1rem',

                    "&:not(:last-child)": {
                        borderBottom: `1px solid ${theme.colorGreyLight2}`
                    }
                }
            }
        },

        "& .cta": {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            textAlign: 'center',

                
            "& .price-box": {
                textAlign: 'center',
                color: theme.colorWhite,
                marginBottom: '8rem'
            },

            "& .price-only": {
                fontSize: '1.4rem',
                textTransform: 'uppercase'
            },

            "& .price-value": {
                fontSize: '6rem',
                fontWeight: 100
            },
        },


        [`@media only screen and (max-width: 56.25em), 
                 only screen and (hover: none)`]: {

            height: 'auto',
            borderRadius: '3px',
            backgroundColor: theme.colorWhite,
            boxShadow: `0 1.5rem 4rem ${convert(theme.colorBlack, .15)}`,
            
            "& .side": {
                height: 'auto',
                position: 'relative',
                boxShadow: 'none',

                "&.back": {
                    transform: 'rotateY(0) !important',
                    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)'
                }
            },
        
            "&:hover .side.front": {
                transform: 'rotateY(0)'
            },
        
            "& .details": {
                padding: '1rem 3rem'
            },

            "& .cta": {
                position: 'relative',
                top: '0%',
                left: '0',
                transform: 'translate(0)',
                width: '100%',
                padding: '7rem 4rem 4rem 4rem',
                
                "& .price-box": {
                    marginBottom: '3rem'
                },
    
                "& .price-value": {
                    fontSize: '4rem'
                }
            }
        }
    }
}));

export default function TourCard({ heading, modifier, list, price }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.root}>
            {/* Front side */}

            <div className="side front">
                <div className={`picture ${modifier}`}>
                    &nbsp;
                </div>
                <h4 className="heading">
                    <span className={modifier}>
                        { heading }
                    </span>
                </h4>
                <div className="details">
                    <ul>
                        {list.map((li, idx) => (
                        <li key={idx}>{li}</li> 
                        ))}
                    </ul>
                </div>
            </div>

            {/* Back side */}
            
            <div className={`side back ${modifier}`}>
                <div className="cta">
                    <div className="price-box">
                        <p className="price-only">
                            Only
                        </p>
                        <p className="price-value">
                            {price}
                        </p>
                    </div>
                    <AnimatedButton
                        white="true"
                        text="Book now"
                        href="#popup"
                    />
                </div>
            </div>
        </div>
    );
}