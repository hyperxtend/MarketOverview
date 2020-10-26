import React from 'react';

import CoinIDs from '../../components/coin-ids/component';

const CoinTable = () => (
  <table>
    <thead>
      <tr>
        <th>Coin Names</th>
      </tr>
    </thead>
    <tbody>
      <CoinIDs />
    </tbody>
  </table>
);

export default CoinTable;
