import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';
import AnimatedButton from './AnimatedButton';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
  bookSection: {
    padding: '15rem 0',
    backgroundImage: `linear-gradient(to right bottom, ${theme.colorPrimaryLight}, ${theme.colorPrimaryDark})`,

    [theme.respond('tab-port')]: {
        padding: '10rem 0'
    }
  },

  book: {
    backgroundImage: `linear-gradient(105deg, 
      ${convert(theme.colorWhite, .9)} 0%,
      ${convert(theme.colorWhite, .9)} 50%,
      transparent 50%) ,
      url(../images/nat-10.jpg)`,
    backgroundSize: '100%',
    borderRadius: '3px',
    boxShadow: `0 1.5rem 4rem ${convert(theme.colorBlack, .2)}`,

    [theme.respond('tab-land')]: {
      backgroundImage: `linear-gradient(105deg, 
        ${convert(theme.colorWhite, .9)} 0%,
        ${convert(theme.colorWhite, .9)} 65%,
        transparent 65%) ,
        url(../images/nat-10.jpg)`,
      backgroundSize: 'cover',
    },

    [theme.respond('tab-port')]: {
      backgroundImage: `linear-gradient(to right, 
        ${convert(theme.colorWhite, .9)} 0%,
        ${convert(theme.colorWhite, .9)} 100%),
        url(../images/nat-10.jpg)`,
    },

    "& .form": {
      width: '50%',
      padding: '6rem',

      [theme.respond('tab-land')]: {
        width: '65%',
      },

      [theme.respond('tab-port')]:{
        width: '100%',
      }
    }
  },
  
  form: {
    "& .group:not(:last-child)": {
      marginBottom: '2rem'
    },

    "& input[type=text],input[type=email]": {
        fontSize: '1.5rem',
        fontFamily: 'inherit',
        color: 'inherit',
        padding: '1.5rem 2rem',
        borderRadius: '2px',
        backgroundColor: convert(theme.colorWhite, .5),
        border: 'none',
        borderBottom: '3px solid transparent',
        width: '90%',
        display: 'block',
        transition: 'all .3s',

        [theme.respond('tab-port')]: {
            width: '100%'
        },

        "&:focus": {
            outline: 'none',
            boxShadow: `0 1rem 2rem ${convert(theme.colorBlack, .1)}`,
            borderBottom: '3px solid ' + theme.colorPrimary,
        },

        "&:focus:invalid": {
            borderBottom: '3px solid ' + theme.colorSecondaryDark,
        },

        "&::-webkit-input-placeholder": {
            color: theme.colorGreyDark2,
        }
    },


    "& .label": {
        fontSize: '1.2rem',
        fontWeight: 700,
        marginLeft: '2rem',
        marginTop: '.7rem',
        display: 'block',
        transition: 'all .3s'
    },

    "& input:placeholder-shown + label": {
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateY(-4rem)'
    },


    "& .radio-group": {
        width: '49%',
        display: 'inline-block',

        [theme.respond('tab-port')]: {
            width: '100%',
            marginBottom: '2rem'
        },

        "& input": {
          display: 'none'
        },
        
        "& label": {
            fontSize: theme.defaultFontSize,
            cursor: 'pointer',
            position: 'relative',
            paddingLeft: '4.5rem',
        },

        "& span": {
            height: '3rem',
            width: '3rem',
            border: '5px solid ' + theme.colorPrimary,
            borderRadius: '50%',
            display: 'inline-block',
            position: 'absolute',
            left: 0,
            top: '-.4rem',

            "&::after": {
                content: '""',
                display: 'block', 
                height: '1.3rem',
                width: '1.3rem',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: theme.colorPrimary,
                opacity: 0,
                transition: 'opacity .2s',
            }
        }
    },

    "& input:checked ~ label span::after": {
        opacity: 1
    }
  }

}));

export default function Booking() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <section className={classes.bookSection}>
        <div className="row">
            <div className={classes.book}>
                <div className="form">
                    <form action="#" className={classes.form}>
                        <div className="u-margin-bottom-medium">
                            <h2>
                                Start booking now
                            </h2>
                        </div>

                        <div className="group">
                            <input type="text" placeholder="Full name" id="name" required/>
                            <label htmlFor="name" className="label">Full name</label>
                        </div>

                        <div className="group">
                            <input type="email" placeholder="Email address" id="email" required/>
                            <label htmlFor="email" className="label">Email address</label>
                        </div>

                        <div className="group u-margin-bottom-medium">
                            <div className="radio-group">
                                <input type="radio" id="small" name="size"/>
                                <label htmlFor="small">
                                    <span/>
                                    Small tour group
                                </label>
                            </div>

                            <div className="radio-group">
                                <input type="radio" id="large" name="size"/>
                                <label htmlFor="large">
                                    <span/>
                                    Large tour group
                                </label>
                            </div>
                        </div>

                        <div className="group">
                            <AnimatedButton green="true" text="Next step &rarr;"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}