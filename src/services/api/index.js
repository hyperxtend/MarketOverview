import axios from 'axios';

import { saveToSessionStorage } from '../session-storage';

const getAPIData = async (requestURL, storedKeys) => {
	const response = await axios
		.get(requestURL)
		.then(request => request)
		.then(result => result.data)
		.catch(error => error);

	try {
		if (response) {
			saveToSessionStorage(storedKeys, response);
			return Promise.resolve(response);
		}
		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};

export default getAPIData;
