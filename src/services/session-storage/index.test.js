import { saveToSessionStorage, getFromSessionStorage } from './index';

describe('sessionStorage', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'sessionStorage', {
			value: {
				getItem: jest.fn(),
				setItem: jest.fn(),
			},
			writable: true,
		});
	});

	describe('getFromSessionStorage', () => {
		it('checks if getItem sessionStorage gets called', () => {
			getFromSessionStorage();
			expect(window.sessionStorage.getItem).toHaveBeenCalledTimes(1);
		});
	});

	describe('saveToSessionStorage', () => {
		it('checks if setItem sessionStorage gets called', () => {
			const mockArray = [
				{ name: '10 Rand', value: 10, color: 'Green' },
				{ name: '20 Rand', value: 20, color: 'Brown' },
				{ name: '50 Rand', value: 50, color: 'Red' },
				{ name: '100 Rand', value: 100, color: 'Blue' },
				{ name: '200 Rand', value: 200, color: 'Orange' },
			];
			saveToSessionStorage(mockArray);
			expect(window.sessionStorage.setItem).toHaveBeenCalledTimes(1);
		});
	});
});
