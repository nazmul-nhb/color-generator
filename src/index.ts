import { alphabetColorPalette, numberColorPalette } from './constants';
import { convertOpacityToHex, Opacity } from './handleOpacity';

/**
 * - A string, number, or an array of strings/numbers.
 */
type Argument = string | number | (string | number)[];

/**
 * Returns a hex color or an array of hex colors based on the first character of a string, number, or an array of strings/numbers.
 * - For numbers, it uses 10 predefined colors (0-9).
 * - For letters, it uses 26 predefined colors (A-Z).
 * - Invalid characters and inputs are handled with a warning.
 *
 * @param {string | number | (string | number)[]} arg - A string, number, or an array of strings/numbers.
 * @returns {string | string[]} A hex color for a string/number, or an array of hex colors for each element of the provided array.
 *
 * @example
 * // Using with String
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter('Alice'); // '#132DEE' (Deep blue)
 * console.log(color);
 * ---------------------------------
 * @example
 * // Using with Number
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter(666); // '#FFD700' (Gold)
 * console.log(color);
 * ---------------------------------
 * @example
 * // Using with Array
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const colors = getColorForFirstCharacter(['Alice', 123, 'Bob']);
 * // ['#132DEE', '#FFD700', '#1E90FF'] (Deep blue, Gold, Dodger blue)
 * console.log(colors);
 * ---------------------------------
 * @example
 * // Handling Invalid Input
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter('!@#'); // '🛑 Invalid Character!'
 * console.log(color);
 * ---------------------------------
 * @example
 * // Handling Invalid Input
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter({name: 'John Doe'}); // '🛑 Invalid Input!'
 * console.log(color);
 */
export const getColorForFirstCharacter = (
	arg: Argument,
	opacity: Opacity = 100,
): string | string[] => {
	let initial: string;
	const hexOpacity = convertOpacityToHex(opacity);

	// Handle string input
	if (typeof arg === 'string') {
		// Handle empty string case
		if (!arg) return '🛑 Invalid Input!';
		initial = arg[0];

		// Handle number as string
		if ('0123456789'.includes(initial)) {
			return numberColorPalette[parseInt(initial)] + hexOpacity;
		}

		const upperInitial = initial.toUpperCase();
		const index = upperInitial.charCodeAt(0) - 'A'.charCodeAt(0);

		// Validate alphabet
		if (index >= 0 && index < alphabetColorPalette.length) {
			return alphabetColorPalette[index] + hexOpacity;
		}

		return '🛑 Invalid Character!';
	} else if (typeof arg === 'number' && !isNaN(arg)) {
		// Handle number input
		initial = arg.toString()[0];
		if ('0123456789'.includes(initial)) {
			return numberColorPalette[parseInt(initial)] + hexOpacity;
		}

		return '🛑 Invalid Input!';
	} else if (Array.isArray(arg)) {
		// Handle array of strings/numbers
		return arg.flatMap((el) => {
			const color = getColorForFirstCharacter(el, opacity);
			return Array.isArray(color) ? color : [color]; // Flatten if nested arrays
		});
	}

	return '🛑 Invalid Input!';
};
