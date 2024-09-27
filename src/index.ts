import { alphabetColorPalette, numberColorPalette } from './constants';

type Name = string | number | (string | number)[];

/**
 *
 * @param {string | number | (string | number)[]} arg - Any string, number, array of strings or numbers
 * @returns {string | string[]} - A hex color based on the first letter
 */
export const getColorForFirstLetter = (arg: Name): string | string[] => {
	let initial: string;
	let upperInitial: string;
	let index: number;

	if (typeof arg === 'string') {
		initial = arg[0];

		// check if the string contains any number
		if ('0123456789'.includes(initial)) {
			console.log({ initial });
			return numberColorPalette[parseInt(initial)];
		}

		// Convert initial to uppercase
		upperInitial = initial.toUpperCase();

		// Get ASCII code of the initial and subtract ASCII code of 'A' to start from 0
		index = upperInitial.charCodeAt(0) - 'A'.charCodeAt(0);

		// Check if index is valid
		if (index < 0 || index >= alphabetColorPalette.length) {
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

		return alphabetColorPalette[index];
	} else if (typeof arg === 'number' && !isNaN(arg)) {
		initial = arg.toString()[0];
		console.log({ initial });
		// check if the string contains any number
		if ('0123456789'.includes(initial)) {
			console.log({ initial });
			return numberColorPalette[parseInt(initial)];
		}

		return '🛑 Invalid Input!';
	}

	return '🛑 Invalid Input!';
};
