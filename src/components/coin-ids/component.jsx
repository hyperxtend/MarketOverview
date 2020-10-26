import React from 'react';
import { IfFulfilled, IfRejected, IfPending, useAsync } from 'react-async';

import API_URLS from '../../api/constants';
import { getAPIData } from '../../services/api';
import { getCoinIDs } from '../../utils';
import CoinNames from '../coin-names/component';

const getCoinIDsFromAPI = async () => {
  try {
    const response = await getAPIData(API_URLS.coinList);
    const coinIDs = getCoinIDs(response);
    return coinIDs;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

const CoinIDs = () => {
  const asyncData = useAsync({ promiseFn: getCoinIDsFromAPI });
  return (
    <>
      <IfFulfilled state={asyncData}>
        {(data) => data.map((coinID) => <CoinNames coinID={coinID} />)}
      </IfFulfilled>
      <IfPending state={asyncData}>
        <tr>
          <td>Loading...</td>
        </tr>
      </IfPending>
      <IfRejected state={asyncData}>
        <tr>
          <td>Sorry, could not find data </td>
        </tr>
      </IfRejected>
    </>
  );
};

export default CoinIDs;
