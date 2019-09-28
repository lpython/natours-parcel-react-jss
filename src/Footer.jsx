import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
    footer: {
        backgroundColor: theme.colorGreyDark3,
        padding: '10rem 0',
        fontSize: '1.4rem',
        color: theme.colorGreyLight1,
    
        [theme.respond('tab-port')]: {
            padding: '8rem 0'
        },

        "& a": {
            "&:link, &:visited": {
                color: theme.colorGreyLight1,
                backgroundColor: theme.colorGreyDark3,
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
                transition: 'all .2s'
            },
    
            "&:hover, &:active": {
                color: theme.colorPrimary,
                boxShadow: '0 1rem 2rem ' + convert(theme.colorBlack, .4),
                transform: 'rotate(5deg) scale(1.3)'
            }
        },
    
        "& .logo-box": {
            textAlign: 'center',
            marginBottom: '8rem',
    
            [theme.respond('tab-port')]: {
                marginBottom: '6rem'
            },

            "& picture": {
                width: '15rem',
                height: 'auto'
            }
        },
    
        "& .navigation": {
            borderTop: '1px solid ' + theme.colorGreyDark,
            paddingTop: '2rem',
            display: 'inline-block',
    
            [theme.respond('tab-port')]: {
                width: '100%',
                textAlign: 'center'
            },

            "& ul": {
                listStyle: 'none',

                "& li": {
                    display: 'inline-block',
            
                    "&:not(:last-child)": {
                        marginRight: '1.5rem'
                    }
                }
            }
        },      
    
        "& .copyright": {
            borderTop: '1px solid ' + theme.colorGreyDark,
            paddingTop: '2rem',
            width: '80%',
            float: 'right',
    
            [theme.respond('tab-port')]: {
                width: '100%',
                float: 'none'
            }
        }
    }
}));

export default function Footer() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <footer className={classes.footer}>
            <div className="logo-box">
                <picture className="logo">
                    <source srcSet="images/logo-green-small-1x.png 1x, images/logo-green-small-2x.png 2x"
                        media="(max-width: 37.5em)" />
                    <img srcSet="images/logo-green-1x.png 1x, images/logo-green-2x.png 2x" alt="Full logo" src="images/logo-green-2x.png" />
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="navigation">
                        <ul>
                            <li className="item"><a href="#">Company</a></li>
                            <li className="item"><a href="#">Contact us</a></li>
                            <li className="item"><a href="#">Carrers</a></li>
                            <li className="item"><a href="#">Privacy policy</a></li>
                            <li className="item"><a href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="copyright">
                        Built by <a href="#">Jonas Schmedtmann</a> for his online course <a href="#">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                </p>
                </div>
            </div>
        </footer>
    );
}