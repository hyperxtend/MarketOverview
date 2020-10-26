const API_URLS = {
  coinList: 'https://api.coingecko.com/api/v3/coins/list',
  coinData: [
    'https://api.coingecko.com/api/v3/coins/',
    '?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false',
  ],
};

export default API_URLS;
