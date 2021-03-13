import './App.css';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExVTOP from './components/projects/ExVTOP/ExVTOP';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/exvtop" component={ExVTOP} />
      </Switch>
    </Router>
  );
}

export default App;
