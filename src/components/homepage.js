import React from 'react';
import About from './About';
import Help from './Help';

import './homepage.css';
import ListProjects from './LsProjects';

const History = React.createContext({
  history: [],
  setHistory: () => {},
});

const Command = ({ cmd, wrong, c, cat }) => {
  const { setHistory } = React.useContext(History);

  const components = {
    neofetch: <About />,
    help: <Help />,
    cat: <>Work in progress {cat}</>,
    'ls-projects': <ListProjects />,
  };

  const complete = (sub) => {
    return ['neofetch', 'cat', 'ls-projects', 'help'].filter(
      (key) => key.indexOf(sub) === 0
    );
  };

  const submit = (e) => {
    if (e.key === 'Enter') {
      e.target.readOnly = true;
      if (e.target.value.split(' ')[0] in components) {
        if (e.target.value.includes('cat')) {
          setHistory(
            <Command
              cmd={e.target.value.split(' ')[0]}
              wrong={false}
              cat={e.target.value.split(' ')[1]}
            />
          );
        } else setHistory(<Command cmd={e.target.value} wrong={false} />);
      } else {
        setHistory(<Command cmd="help" wrong={true} c={e.target.value} />);
      }
    } else if (e.keyCode === 9) {
      e.preventDefault();
      e.target.value = complete(e.target.value)[0] || e.target.value;
    }
  };
  return (
    <>
      <div>{wrong ? <p> {c}, command not found:</p> : <></>}</div>
      <div>{components[cmd]}</div>
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
    </>
  );
};

export default function Homepage() {
  const [history, setHistory] = React.useState([<Command init="help" />]);

  const update = (data) => {
    setHistory((history) => history.concat([data]));
  };
  return (
    <History.Provider
      value={{
        history: history,
        setHistory: update,
      }}
    >
      <div className="background">{history}</div>
    </History.Provider>
  );
}
