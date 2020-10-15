import React from 'react';

import CoinNames from '../../components/coin-names';

const CoinTable = () => (
	<table>
		<thead>
			<tr>
				<th>Coin Names</th>
			</tr>
		</thead>
		<tbody>
			<CoinNames />
		</tbody>
	</table>
);

export default CoinTable;
