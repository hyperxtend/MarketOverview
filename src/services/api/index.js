import axios from 'axios';

export const getAPIData = async requestURL => {
	const response = await axios
		.get(requestURL)
		.then(request => request)
		.then(result => console.log('Result -', result.data))
		.catch(error => console.log('Error -', error));

	try {
		if (response) {
			return Promise.resolve(response);
		}
		return response;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
};
