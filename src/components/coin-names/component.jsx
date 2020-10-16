import React, { useEffect, useState } from 'react';

import API_URLS from '../../api/constants';
import storageKeys from '../../services/session-storage/constants';
import getAPIData from '../../services/api';
import { createCoinNameArray } from '../../utils';
import { getFromSessionStorage } from '../../services/session-storage';

const CoinNames = () => {
  const [coinNames, setCoinNames] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      await getAPIData(API_URLS.coinList, storageKeys.coinNames);
      const storedCoinNames = getFromSessionStorage(storageKeys.coinNames);
      const namesOfCoins = createCoinNameArray(storedCoinNames);
      setCoinNames(namesOfCoins);
    };
    fetchDataFromAPI();
  }, []);

  const coinNameList = coinNames.map((coins) => (
    <tr key={coins}>
      <td>{coins}</td>
    </tr>
  ));

  return <>{coinNameList}</>;
};

export default CoinNames;
