import { colorPalette } from './constants';

/**
 *
 * @param string
 * @returns A hex color
 */
export const getColorForFirstLetter = (string: string) => {
	if (typeof string !== 'string') {
		try {
			throw new Error('🛑 Invalid Input!');
		} catch (error) {
			if (error instanceof Error) {
				return error.message;
			}
			return '🛑 Invalid Input!';
		}
	}

	const initial = string[0];

	// Convert initial to uppercase
	const upperInitial = initial.toUpperCase();

	// Get ASCII code of the initial and subtract ASCII code of 'A' to start from 0
	const index = upperInitial.charCodeAt(0) - 'A'.charCodeAt(0);

	// Check if index is valid
	if (index < 0 || index >= colorPalette.length) {
		try {
			throw new Error('🛑 Invalid Character!');
		} catch (error) {
			if (error instanceof Error) {
				return error.message;
			}
			return '🛑 Invalid Character!';
		}
	}

	console.log({ initial, upperInitial, index });

	return colorPalette[index];
};
