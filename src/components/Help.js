import React from 'react';

export default function Help() {
  return (
    <>
      <p>Usage: &lt;command&gt;</p>
      <p>Commands:</p>
      <p className="indent">
        neofetch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows something about
        me. :)
      </p>
      <p className="indent">
        projects &nbsp;&nbsp;&nbsp;&nbsp; Lists some of my projects
      </p>
      <p className="indent">
        help &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show this
        help window
      </p>
    </>
  );
}
