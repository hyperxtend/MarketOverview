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

export default getAPIData;
