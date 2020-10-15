import axios from 'axios';
import getAPIData from './index';

import API_URLS from '../../api/constants';
import storageKeys from '../../services/session-storage/constants';

jest.mock('axios');

describe('fetchData', () => {
  it('returns the title of the first album', async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: '01coin', symbol: 'zoc', name: '01coin' },
        {
          id: '0-5x-long-algorand-token',
          symbol: 'algohalf',
          name: '0.5X Long Algorand Token',
        },
        {
          id: '0-5x-long-altcoin-index-token',
          symbol: 'althalf',
          name: '0.5X Long Altcoin Index Token',
        },
        {
          id: '0-5x-long-balancer-token',
          symbol: 'balhalf',
          name: '0.5X Long Balancer Token',
        },
      ],
    });
    const firstCoinName = '01coin';

    const getRequest = await getAPIData(
      API_URLS.coinList,
      storageKeys.coinNames
    );
    expect(getRequest[0].name).toEqual(firstCoinName);
  });
});
