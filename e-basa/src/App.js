import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks'; 
import Letra from './pages/letra';
import Login from './pages/login';
import Signin from './pages/signin';
import Registration from './pages/registration';

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
          <Route path="/signin" component={Signin} />
          <Route path="/registration" component={Registration} />
        </Switch>
       

      </div>
    </Router>
  );
}

export default App;
