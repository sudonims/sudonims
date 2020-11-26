import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AspectRatio from 'react-aspect-ratio';

import './homepage.css';
import sudonims from './sudonims.png';

const Help = () => {
  return (
    <>
      <p>Usage: &lt;command&gt;</p>
      <p>Commands:</p>
      <p className="indent">
        neofetch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows something about
        me. :)
      </p>
      <p className="indent">
        project &nbsp;&nbsp;&nbsp;&nbsp; Lists some of my projects
      </p>
      <p className="indent">
        help &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show this
        help window
      </p>
    </>
  );
};

const About = () => {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(
    (width, height) => {
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    },
    [window]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AspectRatio
            ratio="522/504"
            style={{
              maxWidth: '45vw',
            }}
          >
            <img src={sudonims} height="auto" width="auto" />
          </AspectRatio>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <p>
                <label style={{ color: '#0dbf00' }}>nimish</label>@
                <label style={{ color: '#0dbf00' }}>shah</label>
              </p>
            </div>
            <div className="col-12">
              <p>---------------</p>
            </div>
            <div className="col-12">
              <span>
                <b style={{ color: '#0dbf00' }}>About:&nbsp;&nbsp;</b>
              </span>
              <span>
                I'm a guy who loves to code, constantly explore new stuff in
                this ever evolving world
              </span>
            </div>
            <div className="col-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Interests:&nbsp;&nbsp;</b>
              </span>
              <span>
                Movies, TV Shows, Playing outdoor games, Programming, Linux
                Kernel, Android, Webdev
              </span>
            </div>
            <div className="col-12">
              <span>
                <b style={{ color: '#0dbf00' }}>
                  What I love to do:&nbsp;&nbsp;
                </b>
              </span>
              <span>
                Play around linux, Having meaningless talks with friends :),
                Develop something interesting
              </span>
            </div>
            <div className="col-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Skills:&nbsp;&nbsp;</b>
              </span>
              <span>
                C/C++, Git, JavaScript, Googling, Linux, Python, Webdev
              </span>
            </div>
            <div className="col-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Reach me @:&nbsp;&nbsp;</b>
                <p>
                  <FontAwesomeIcon icon={faPhone} />{' '}
                  <a
                    target="_blank"
                    className="hyperlink"
                    href="tel:+919405242307"
                  >
                    <u>9405242307</u>
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faMailBulk} />{' '}
                  <a
                    target="_blank"
                    className="hyperlink"
                    href="mailto:nimishshah2000@gmail.com"
                  >
                    <u>nimishshah2000@gmail.com</u>
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />{' '}
                  <a
                    target="_blank"
                    className="hyperlink"
                    href="https://www.linkedin.com/in/sudonims"
                  >
                    <u>@sudonims</u>
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faGithub} />{' '}
                  <a
                    target="_blank"
                    className="hyperlink"
                    href="https://www.github.com/sudonims"
                  >
                    <u>@sudonims</u>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Homepage() {
  const [cmd, setCmd] = React.useState('help');

  const components = {
    neofetch: <About />,
    help: <Help />,
    projects: <>projects</>,
  };
  const submit = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value in components) setCmd(e.target.value);
      else setCmd('help');
    }
  };
  return (
    <div className="background">
      <div>
        <label>root@sudonims ~#</label>&nbsp;
        <input
          onKeyDown={submit}
          autoFocus={true}
          className="input"
          id="caret"
        />
      </div>
      <div>{components[cmd]}</div>
    </div>
  );
}
