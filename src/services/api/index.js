import axios from 'axios';

import API_URLS from '../../api/constants';
import { getFirst20Items } from '../../utils';

export const getAPIData = async (requestURL) => {
  const response = await axios
    .get(requestURL)
    .then((request) => request)
    .then((result) => getFirst20Items(result.data))
    .catch((error) => error);

  return response;
};

export const getCoinDescription = async (coinIDs) => {
  const response = await axios
    .get(API_URLS.coinData[0] + coinIDs + API_URLS.coinData[1])
    .then((request) => request.data)
    .catch((error) => error);
  console.log(response.description.en);
  return response.description.en;
};
