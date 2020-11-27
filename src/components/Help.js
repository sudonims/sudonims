import React from 'react';

export default function Help() {
  return (
    <div className="container">
      <p>Usage: &lt;command&gt;</p>
      <p>Commands:</p>
      <div className="row">
        <div className="col-3 col-md-2 col-lg-1">
          <p className="indent">
            <b>neofetch</b>
          </p>
        </div>
        <div className="col-2 col-md-1 col-lg-1"></div>
        <div className="col col-md-4 col-lg-3">
          Shows something about me. :)
        </div>
      </div>
      <div className="row">
        <div className="col-3 col-md-2 col-lg-1">
          <p className="indent">
            <b>projects</b>
          </p>
        </div>
        <div className="col-2 col-md-1 col-lg-1"></div>
        <div className="col col-md-4 col-lg-3">Lists some of my projects</div>
      </div>
      <div className="row">
        <div className="col-3 col-md-2 col-lg-1">
          <p className="indent">
            <b>help</b>
          </p>
        </div>
        <div className="col-2 col-md-1 col-lg-1"></div>
        <div className="col col-md-4 col-lg-3">Show this help window</div>
      </div>
      <div className="row">
        <div className="col-3 col-md-2 col-lg-1">
          <p className="indent">
            <b>exit</b>
          </p>
        </div>
        <div className="col-2 col-md-1 col-lg-1"></div>
        <div className="col col-md-4 col-lg-3">Close this tab</div>
      </div>
    </div>
  );
}
