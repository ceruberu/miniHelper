import React, { Component } from 'react';
import './Check.css';

class Check extends Component {
  render() {
    return (
      <div className="check">
        <span>
          8 / 27 
        </span>  
        <span>
          14:00 - 19:00 
        </span>  
        <span className="checkProfit">
          + ₩ 37,650
        </span>
      </div>
    );
  }
}

export default Check;
