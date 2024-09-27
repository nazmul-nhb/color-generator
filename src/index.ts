import { alphabetColorPalette, numberColorPalette } from './constants';

type Argument =
	| string
	| number
	| (
			| string
			| number
	  )[]; /** A string, number, or an array of strings/numbers. */

type Color = string; /** Returns a hex color */
type Colors = string[]; /** Returns an array of hex colors */

/**
 * Returns a hex color based on the first character of a string, number, or an array of strings/numbers.
 * For numbers, it will use 9 predefined colors, and for letters, it will use 26 predefined colors.
 * Invalid inputs are handled with a warning.
 *
 * @param {string | number | (string | number)[]} arg - A string, number, or an array of strings/numbers.
 * @returns {Color | Colors} - A hex color for a string/number, or an array of hex colors for each element of the provided array.
 */
export const getColorForFirstLetter = (arg: Argument): Color | Colors => {
	let initial: string;

	// Handle string input
	if (typeof arg === 'string') {
		// Handle empty string case
		if (!arg) return '🛑 Invalid Input!';
		initial = arg[0];

		if ('0123456789'.includes(initial)) {
			return numberColorPalette[parseInt(initial)];
		}

		const upperInitial = initial.toUpperCase();
		const index = upperInitial.charCodeAt(0) - 'A'.charCodeAt(0);

		if (index >= 0 && index < alphabetColorPalette.length) {
			return alphabetColorPalette[index];
		}

		return '🛑 Invalid Character!';
	} else if (typeof arg === 'number' && !isNaN(arg)) {
		// Handle number input
		initial = arg.toString()[0];
		if ('0123456789'.includes(initial)) {
			return numberColorPalette[parseInt(initial)];
		}

		return '🛑 Invalid Input!';
	} else if (Array.isArray(arg)) {
		// Handle array of strings/numbers
		return arg.flatMap((el) => {
			const color = getColorForFirstLetter(el);
			return Array.isArray(color) ? color : [color]; // Flatten if nested arrays
		});
	}

	return '🛑 Invalid Input!';
};
