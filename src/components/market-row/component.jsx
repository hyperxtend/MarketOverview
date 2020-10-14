import React, { Component } from 'react';
import { API_URLS } from '../../api/constants';
import { getAPIData } from '../../services/api';

class MarketRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasLoaded: false,
			coins: [],
		};
	}
	async componentDidMount() {
		const response = getAPIData(API_URLS.coinList);
	}

	render() {
		const { hasLoaded, coins } = this.state;
		return <td>items</td>;
	}
}

export default MarketRow;
