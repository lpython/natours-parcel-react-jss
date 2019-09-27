import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    story: {
        width: '75%',
        margin: '0 auto',
        boxShadow: `0 3rem 6rem ${convert(theme.colorBlack, .1)}`,
        backgroundColor: convert(theme.colorWhite, .6),
        borderRadius: '3px',
        padding: '6rem',
        paddingLeft: '9rem',
        fontSize: theme.defaultFontSize,
        transform: 'skewX(-12deg)',

        [theme.respond('tab-port')]: {
            width: '100%',
            padding: '4rem',
            paddingLeft: '7rem',
        },

        [theme.respond('phone')]: {
            transform: 'skewX(0)',
        },

        "& .shape": {
            width: '15rem',
            height: '15rem',
            float: 'left',
            transform: 'translateX(-3rem) skewX(12deg)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '50%',

            "@supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0))": {
                "-webkit-clip-path": 'circle(50% at 50% 50%)',
                clipPath: 'circle(50% at 50% 50%)',
                "-webkit-shape-outside": 'circle(50% at 50% 50%)',
                shapeOutside: 'circle(50% at 50% 50%)',
                borderRadius: 'unset',
            },

            [theme.respond('phone')]: {
                transform: 'translateX(-3rem) skewX(0)',
            },

            "& .img": {
                height: '100%',
                transform: 'translateX(-4rem) scale(1.4)',
                backfaceVisibility: 'hidden',
                transition: 'all .5s'
            },

            "& .caption": {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 20%)',
                color: theme.colorWhite,
                textTransform: 'uppercase',
                fontSize: '1.7rem',
                textAlign: 'center',
                opacity: 0,
                transition: 'all .5s',
                backfaceVisibility: 'hidden'
            }

        },

        "&:hover .shape": {
            "& .caption": {
                opacity: '1 ',
                transform: 'translate(-50%, -50%) '
            },

            "& .img": {
                transform: 'translateX(-4rem) scale(1)',
                filter: 'blur(3px) brightness(80%)',
            }
        },
        
        "& .text": {
            transform: 'skewX(12deg)',

            [theme.respond('phone')]: {
                transform: 'skewX(0)'
            }
        }

    }
}));

export default function Story({ children }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.story}>
            { children }
        </div>
    );
}