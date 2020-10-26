import React from 'react';
import PropTypes from 'prop-types';
import {
  IfFulfilled,
  IfPending,
  IfInitial,
  useAsync,
  IfRejected,
} from 'react-async';

import { getCoinDescription } from '../../services/api';

const getCoinInfoFromAPI = async (coinID) => {
  try {
    const response = await getCoinDescription(coinID);
    return response;
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

const CoinDescription = ({ coinID }) => {
  const asyncData = useAsync({
    promiseFn: getCoinInfoFromAPI,
  });
  return (
    <>
      <IfInitial state={asyncData} persist>
        <tr key={coinID}>
          <td>
            <button type="submit" onClick={() => getCoinInfoFromAPI(coinID)}>
              {coinID}
            </button>
          </td>
        </tr>
      </IfInitial>
      <IfPending state={asyncData}>
        <tr>
          <td>Loading....</td>
        </tr>
      </IfPending>
      <IfFulfilled state={asyncData}>
        {(data) => (
          <tr>
            <td>{data}</td>
          </tr>
        )}
      </IfFulfilled>
      <IfRejected state={asyncData}>
        <tr>
          <td>Click for info about coin</td>
        </tr>
      </IfRejected>
    </>
  );
};

CoinDescription.propTypes = {
  coinID: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CoinDescription;
