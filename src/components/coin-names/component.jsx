import React, { Component } from 'react';

import API_URLS from '../../api/constants';
import storageKeys from '../../services/session-storage/constants';
import getAPIData from '../../services/api';
import { createCoinNameArray, getFirst20Items } from '../../utils';
import { getFromSessionStorage } from '../../services/session-storage';

class CoinNames extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coinNames: [],
		};
	}
	async componentDidMount() {
		getAPIData(API_URLS.coinList, storageKeys.coinNames);
		const storedCoinNames = getFromSessionStorage(storageKeys.coinNames);
		const namesOfCoins = createCoinNameArray(storedCoinNames);
		this.setState({
			coinNames: namesOfCoins,
		});
	}

	render() {
		const { coinNames } = this.state;
		const coinsList = getFirst20Items(coinNames).map(coins => <li>{coins}</li>);
		return <td>{coinsList}</td>;
	}
}

export default CoinNames;
