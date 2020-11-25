import React from 'react';

import './homepage.css';
export default function Homepage() {
  const [cmd, setCmd] = React.useState('');

  const submit = (e) => {
    if (e.key === 'Enter') {
      setCmd(cmd);
    }
  };
  return (
    <div className="background">
      <label>root@sudonims ~$</label>&nbsp;
      <input onKeyDown={submit} autoFocus={true} className="input" id="caret" />
    </div>
  );
}
