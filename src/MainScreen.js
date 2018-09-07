import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import AddCheck from './AddCheck';
import History from './History';

import './MainScreen.css';

class Landing extends Component {
  render() {
    return (
      <div className="miniHelperApp">
        <header>
          <div className="headerLogo" />
          <span className="profile">
            김덕연
          </span>
        </header>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addCheck" component={AddCheck} />
            <Route path="/history" component={History} />
          </Switch>
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
    );
  }
}

export default Landing;
