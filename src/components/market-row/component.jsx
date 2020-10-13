import React, { Component } from 'react';
import { API_URLS } from '../../api';
import { getAPIData } from '../../services/api';

class MarketRow extends Component {
	render() {
		const response = getAPIData(API_URLS.getMarkets);
		console.log(response);
		return <td>items</td>;
	}
}

export default MarketRow;
