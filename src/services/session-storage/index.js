export const getFromSessionStorage = storedKey => {
	try {
		const storedItems = sessionStorage.getItem(storedKey);
		if (storedItems === null) {
			return undefined;
		}
		return JSON.parse(storedItems);
	} catch (error) {
		return undefined;
	}
};

export const saveToSessionStorage = (storedKey, savedItems) => {
	try {
		const savedToSessionStorage = JSON.stringify(savedItems);
		sessionStorage.setItem(storedKey, savedToSessionStorage);
	} catch (error) {
		return error;
	}
	return undefined;
};
