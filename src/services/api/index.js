import axios from 'axios';

import { getFirst20Items } from '../../utils';

export const getAPIData = async (requestURL) => {
  const response = await axios
    .get(requestURL)
    .then((request) => request)
    .then((result) => getFirst20Items(result.data))
    .catch((error) => error);

  return response;
};

export const getCoinDescription = async (requestURL, coinID) => {
  const response = await axios
    .get(
      `${
        requestURL + coinID
      }?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
    .then((request) => request.data)
    .catch((error) => error);
  console.log(response.description.en);
  return response.description.en;
};
