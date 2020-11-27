import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import sudonims from './sudonims.png';

export default function About() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(
    (width) => {
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    },
    [window]
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6">
          <img
            className="img"
            alt="ascii-art"
            src={sudonims}
            height={width * 0.35 * 1.1}
            width={width * 0.35}
          />
        </div>
        <div className="col-7 col-sm-7 col-md-7 col-lg-6 col-xl-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p>
                <label style={{ color: '#0dbf00' }}>
                  <b>nimish</b>
                </label>
                @
                <label style={{ color: '#0dbf00' }}>
                  <b>shah</b>
                </label>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p>------------------------</p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <span>
                <b style={{ color: '#0dbf00' }}>About:&nbsp;&nbsp;</b>
              </span>
              <span>
                I'm a guy who loves to code, constantly explore new stuff in
                this ever evolving world
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Interests:&nbsp;&nbsp;</b>
              </span>
              <span>
                Movies, TV Shows, Playing outdoor games, Programming, Linux
                Kernel, Android, Webdev
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Skills:&nbsp;&nbsp;</b>
              </span>
              <span>
                C/C++, Git, JavaScript, Googling, Linux, Python, Webdev
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Resume:&nbsp;&nbsp;</b>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hyperlink"
                  href="https://firebasestorage.googleapis.com/v0/b/sudonims.appspot.com/o/Nimish's%20Resume.pdf?alt=media&token=d9c5ebec-d224-4d6a-9462-ddfb3be26f74"
                >
                  <u>Get</u>
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <span>
                <b style={{ color: '#0dbf00' }}>Reach me @:&nbsp;&nbsp;</b>
                <p>
                  <FontAwesomeIcon icon={faPhone} />{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
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
                    rel="noreferrer"
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
                    rel="noreferrer"
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
}
