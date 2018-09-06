import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import AddCheck from './AddCheck';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="miniHelperApp">
        <header>
          <div className="headerLogo" />
          <span className="profile">
            김덕연
          </span>
        </header>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/addCheck" component={AddCheck} />
          <Route path="/history" component={History} />
        </div>
        <div className="footerNav">
          <Link to="/">
            <div className="navButton homeButton" />
          </Link>
          <Link to="/addCheck">
            <div className="navButton addButton" />
          </Link>
          <Link to="/history">
            <div className="navButton historyButton" />
          </Link>
        </div>
      </div>
    </Router>

    );
  }
}

export default App;
