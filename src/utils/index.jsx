import React from 'react';

export const createCoinNameArray = coinArray => {
	const coinNameArray = [];
	coinArray.forEach(coin => {
		coinNameArray.push(coin.name);
	});
	return coinNameArray;
};

export const getFirst20Items = items => {
	return items.slice(0, 20).map(item => <li>{item}</li>);
};
