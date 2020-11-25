import React from 'react';
import './homepage.css';

const Help = () => {
  return (
    <>
      <p>Usage: &lt;command&gt;</p>
      <p>Commands:</p>
      <p className="indent">
        about &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows something about
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
export default function Homepage() {
  const [cmd, setCmd] = React.useState('help');

  const components = {
    about: <>About</>,
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
        <label>root@sudonims ~$</label>&nbsp;
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
