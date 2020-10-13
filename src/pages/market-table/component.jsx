import React from 'react';
import MarketRow from '../../components/market-row';
const MarketTable = () => (
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<MarketRow />
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Larry the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
	</table>
);

export default MarketTable;
