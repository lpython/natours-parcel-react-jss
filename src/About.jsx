import React from 'react';
import Button from './Button.jsx';
import withStyles from 'react-jss';

// import nat1Large from '../images/nat-1-large.jpg';
// import nat2Large from '../images/nat-2-large.jpg';
// import nat3Large from '../images/nat-3-large.jpg';

// import nat1Small from '../images/nat-1.jpg';
// import nat2Small from '../images/nat-2.jpg';
// import nat3Small from '../images/nat-3.jpg';

const styles = {
    about: {
        backgroundColor: '#567',
        padding: '25rem 0',
        marginTop: '-20vh',
    
        // @include respond(tablet-portrait) {
        //     padding: 20rem 0;
        // }
    
        // @include respond(phone) {
        //     padding: 25rem 0;
        // }
        '& .u-center-text': { textAlign: 'center' },
        '& .u-margin-bottom-big': {
            marginBottom: '8rem !important' 
    
            // @include respond(tablet-portrait) {
            //     margin-bottom: 5rem !important;
            // }
        }
    }
}
const About = ({classes}) => {
    return (
        <section className={classes.about}>
           <div className="u-center-text u-margin-bottom-big">
               <h2 className="heading-secondary">
                   Exciting tours for adventurous people
               </h2>
           </div> 
           <div className="row">
               <div className="col-1-of-2">
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       You're going to fall in love with nature
                   </h3>
                   <p className="paragraph">
                       Autem est sunt ut suscipit. Ipsum ab eius. Ipsa sint adipisci repudiandae consequatur sint illum. Sapiente nihil cum facere.
                   </p>
   
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       Live adventurous like you never have before
                   </h3>
                   <p className="paragraph">
                       Vel voluptatem necessitatibus quis fugit sit est sed. Accusantium eaque nihil. Aut qui quo et repudiandae. Quo maxime nobis aut consequatur non sapiente quisquam exercitationem ad.
                   </p> 
   
                  <Button
                       className="btn-text"
                       text="Learn more &rarr;"
                  />

                   
               </div>
               <div className="col-1-of-2">
                   <div className="composition">

                        <img 
                            srcSet={`images/nat-1.jpg 300w, images/nat-1-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p1"
                            src="images/nat-1-large.jpg"
                        />

                        <img 
                            srcSet={`images/nat-2.jpg 300w, images/nat-2-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p2"
                            src="images/nat-2-large.jpg"
                        />


                        <img 
                            srcSet={`images/nat-3.jpg 300w, images/nat-3-large.jpg 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p3"
                            src="images/nat-3-large.jpg"
                        />
                   </div> 
               </div>
           </div>
        </section>
   );
}

export default withStyles(styles)(About);
