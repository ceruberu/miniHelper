import React, { Component } from 'react';
import './Home.css';
import CheckList from './CheckList';
import Summary from './Summary';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Summary />
        <CheckList />
      </div>
    );
  }
}

export default Home;
