import React from 'react';
import PropTypes from 'prop-types';
import { IfFulfilled, IfRejected, IfPending, useAsync } from 'react-async';

import API_URLS from '../../api/constants';
import { getAPIData } from '../../services/api';
import { createCoinNameArray } from '../../utils';
import CoinDescription from '../coin-description/component';

const getDataFromAPI = async () => {
  try {
    const response = await getAPIData(API_URLS.coinList);
    const namesOfCoins = createCoinNameArray(response);
    return namesOfCoins;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

const CoinNames = ({ coinID }) => {
  const asyncData = useAsync({ promiseFn: getDataFromAPI });
  return (
    <>
      <IfFulfilled state={asyncData}>
        {(data) => <CoinDescription coinNames={data} coinID={coinID} />}
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

CoinNames.propTypes = {
  coinID: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default CoinNames;
