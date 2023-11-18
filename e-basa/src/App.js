import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Sidenav from './pages/Sidenav';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks'; 
import Letra from './pages/letra';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} /> 
          <Route path="/ranks" component={Ranks} /> 
          <Route path="/letra" component={Letra} /> 
        </Switch>
        <Sidenav />

      </div>
    </Router>
  );
}

export default App;
