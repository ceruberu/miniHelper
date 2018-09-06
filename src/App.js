import React, { Component } from 'react';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="miniHelperApp">
        <header>
          <div className="headerLogo" />
        </header>
        <div className="main">
          <Home />
        </div>
        <div className="footerNav">
          <a href="/">
            <div className="navButton homeButton" />
          </a>
          <a href="/addCheck">
            <div className="navButton addButton" />
          </a>
          <a href="/history">
            <div className="navButton historyButton" />
          </a>
        </div>

      </div>
    );
  }
}

export default App;
