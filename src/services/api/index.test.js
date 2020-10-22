import axios from 'axios';

import API_URLS from '../../api/constants';

import getAPIData from './index';

jest.mock('axios');

describe('getAPIData', () => {
  it('returns the name of the first coin', async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: '01-coin', value: 1, name: 'test-coin-1' },
        { id: '02-coin', value: 2, name: 'test-coin-2' },
        { id: '03-coin', value: 3, name: 'test-coin-3' },
        { id: '04-coin', value: 4, name: 'test-coin-4' },
        { id: '05-coin', value: 5, name: 'test-coin-5' },
        { id: '06-coin', value: 6, name: 'test-coin-6' },
      ],
    });
    const firstCoinName = 'test-coin-1';

    const getRequest = await getAPIData(API_URLS.coinList);
    expect(getRequest[0].name).toEqual(firstCoinName);
  });
});
