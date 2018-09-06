import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <span>
          12회
        </span>  
        <span>
          38시간
        </span>  
        <span className="summaryProfit">
          + ₩ 370,650
        </span>
      </div>
    );
  }
}

export default Summary;
