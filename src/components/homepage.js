import React from 'react';
import About from './About';
import Help from './Help';

import './homepage.css';

export default function Homepage() {
  const [cmd, setCmd] = React.useState('help');
  const [wrong, setWrong] = React.useState(false);

  const components = {
    neofetch: <About />,
    help: <Help />,
    projects: <>projects</>,
  };
  const submit = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value in components) {
        setCmd(e.target.value);
        setWrong(false);
      } else {
        setCmd('help');
        setWrong(true);
      }
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
      <div>
        {wrong ? (
          <p>{document.getElementById('caret').value}, command not found:</p>
        ) : (
          <></>
        )}
      </div>
      <div>{components[cmd]}</div>
    </div>
  );
}
