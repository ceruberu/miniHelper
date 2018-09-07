import React from 'react';
import { css } from 'react-emotion';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class Spinner extends React.Component {
  render() {
    return (
        <ScaleLoader
          className={override}
          height={35}
          width={20}
          margin={'2px'}
          radius={2}
          color={'#F8E71C'}
        />
    )
  }
}

export default Spinner;