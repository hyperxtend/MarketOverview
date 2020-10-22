import React, { useEffect, useState } from 'react';
import { IfFulfilled, IfRejected, IfPending, useAsync } from 'react-async';

import API_URLS from '../../api/constants';
import getAPIData from '../../services/api';
import { createCoinNameArray } from '../../utils';

const getDataFromAPI = async () => {
  try {
    const response = await getAPIData(API_URLS.coinList);
    const namesOfCoins = createCoinNameArray(response);
    return namesOfCoins;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

const useGetDataFromAPI = () => {
  const [coinNames, setCoinNames] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((results) => setCoinNames(results));
  }, []);
  return coinNames;
};

const CoinNames = () => {
  const asyncData = useAsync(getDataFromAPI);
  const coinNames = useGetDataFromAPI();

  return (
    <>
      <IfFulfilled state={asyncData}>
        {coinNames.map((coins) => (
          <tr key={coins}>
            <td>{coins}</td>
          </tr>
        ))}
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

export default CoinNames;
