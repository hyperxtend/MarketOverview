import axios from 'axios';

import { getFirst20Items } from '../../utils';

const getAPIData = async (requestURL) => {
  try {
    const response = await axios
      .get(requestURL)
      .then((request) => request)
      .then((result) => getFirst20Items(result.data))
      .catch((error) => error);

    if (response) {
      return Promise.resolve(response);
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAPIData;
