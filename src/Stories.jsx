import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Color from 'color';

import Story from './Story.jsx';
import RaisedButton from './RaisedButton.jsx';

const convert = (hex, alpha = 0.8) => Color(hex).alpha(alpha).string();

const useStyles = createUseStyles(theme => ({
  stories: {
    position: 'relative',
    padding: '15rem 0',
  
    [theme.respond('tab-port')]: {
        padding: '10rem 0'
    }
  }
}));

export default function Stories() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <section className={classes.stories}>
      {/* <div className="bg-video">
          <video className="bg-video__content" autoplay muted loop>
              <source src="img/video.mp4" type="video/mp4">
              <source src="img/video.webm" type="video/webm">
              Your browser is not supported!
          </video>
      </div> */}

      <div className="u-center-text u-margin-bottom-big">
          <h2>
              We make people genuinely happy
          </h2>
      </div>

      <div className="row">
          <Story>
            {/* TODO refactor to component */}
              <figure className="shape">
                  <img src="images/nat-8.jpg" alt="Person on a tour" className="img" />
                  <figcaption className="caption">Mary Smith</figcaption>
              </figure>
              <div className="text">
                  <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                      ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                      repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                  </p>
              </div>
          </Story>
      </div>

      <div className="row">
          <Story>
              <figure className="shape">
                  <img src="images/nat-9.jpg" alt="Person on a tour" className="img" />
                  <figcaption className="caption">Jack Wilson</figcaption>
              </figure>
              <div className="text">
                  <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                      ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                      repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                  </p>
              </div>
          </Story>
      </div>

      <div className="u-center-text u-margin-top-huge">
          <RaisedButton text="Read all stories" />
      </div>
    </section>
  );
}