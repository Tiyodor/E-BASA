import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks'; 
import Letra from './pages/letra';
import Login from './pages/login';
import Guidepage from './pages/guidepage';

function App() {
  return (
    <Router>
      <div id="root">
     
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} /> 
          <Route path="/ranks" component={Ranks} /> 
          <Route path="/letra" component={Letra} /> 
          <Route path="/guidepage" component={Guidepage} />
        </Switch>
       

      </div>
    </Router>
  );
}

export default App;
