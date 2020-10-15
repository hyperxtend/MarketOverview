import { createCoinNameArray, getFirst20Items } from './index';

describe('createCoinNameArray', () => {
	it('function should return an array of values for name keys', () => {
		const mockArray = [
			{ name: '10 Rand', value: 10, color: 'Green' },
			{ name: '20 Rand', value: 20, color: 'Brown' },
			{ name: '50 Rand', value: 50, color: 'Red' },
			{ name: '100 Rand', value: 100, color: 'Blue' },
			{ name: '200 Rand', value: 200, color: 'Orange' },
		];
		const expected = ['10 Rand', '20 Rand', '50 Rand', '100 Rand', '200 Rand'];

		expect(createCoinNameArray(mockArray)).toStrictEqual(expected);
	});
});

describe('getFirst20Items', () => {
	it('function should return a list the 1st 20 values', () => {
		const mockArray = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
		];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		console.log(getFirst20Items(mockArray));
		expect(getFirst20Items(mockArray)).toStrictEqual(expected);
	});
});
