import axios from 'axios';

import { getFirst20Items } from '../../utils';

const getAPIData = async (requestURL) => {
  const response = await axios
    .get(requestURL)
    .then((result) => getFirst20Items(result.data))
    .catch((error) => error);

  return response;
};

export default getAPIData;
