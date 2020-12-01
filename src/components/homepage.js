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

  const complete = (sub) => {
    return ['neofetch', 'projects', 'help', 'exit'].filter(
      (key) => key.indexOf(sub) === 0
    );
  };

  const submit = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value in components) {
        setCmd(e.target.value);
        setWrong(false);
        e.target.value = '';
      } else if (e.target.value === 'exit') {
        document.getElementsByTagName('html')[0].remove();
      } else {
        setCmd('help');
        setWrong(true);
      }
    } else if (e.keyCode === 9) {
      e.preventDefault();
      e.target.value = complete(e.target.value)[0] || e.target.value;
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
          autoComplete="off"
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
