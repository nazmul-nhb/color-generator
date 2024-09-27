import { alphabetColorPalette, numberColorPalette } from './constants';

/**
 * A string, number, or an array of strings/numbers.
 */
type Argument = string | number | (string | number)[];

/**
 * A hex color for a string/number.
 */
type Color = string;

/**
 * An array of hex colors for each element of the provided array.
 */
type Colors = string[];

/**
 * Returns a hex color based on the first character of a string, number, or an array of strings/numbers.
 * For numbers, it will use 9 predefined colors, and for letters, it will use 26 predefined colors.
 * Invalid inputs are handled with a warning.
 *
 * @param {string | number | (string | number)[]} arg - A string, number, or an array of strings/numbers.
 * @returns {Color | Colors} A Color | Array of Colors - A hex color for a string/number, or an array of hex colors for each element of the provided array.
 * 
 * @example
 * // Using with String
 * import { getColorForFirstLetter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstLetter('Alice'); // '#132DEE' (Deep blue)
 * console.log(color);
 * ---------------------------------
 * // Using with Number
 * import { getColorForFirstLetter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstLetter(666); // '#FFD700' (Tomato)
 * console.log(color);
 * ---------------------------------
 * // Using with Array
 * import { getColorForFirstLetter } from 'color-generator-fl';
 * 
 * const colors = getColorForFirstLetter(['Alice', 123, 'Bob']); 
 * // ['#132DEE', '#FFD700', '#1E90FF'] (Deep blue, Gold, Dodger blue)
 * console.log(colors);
 * ---------------------------------
 * // Handling Invalid Input
 * // - The function handles invalid characters (not alphabet or numbers or array of numbers/strings)
 * import { getColorForFirstLetter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstLetter('!@#'); // '🛑 Invalid Character!'
 * console.log(color);
 * ---------------------------------
 * // Handling Invalid Input
 * // - The function handles invalid input (objects or other types) and empty input:
 * import { getColorForFirstLetter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstLetter({name: 'John Doe'}); // '🛑 Invalid Input!'
 * console.log(color);
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
