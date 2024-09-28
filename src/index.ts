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
 * @param {Opacity} [opacity=100] - A value from 0 to 100 representing the opacity percentage.
 * @returns {string | string[]} A hex color for a string/number, or an array of hex colors for each element of the provided array.
 *
 * @example
 * // Using with String
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstCharacter('Alice'); // '#132DEEFF' (Deep blue)
 * console.log(color);
 * 
 * const colorWithOpacity = getColorForFirstCharacter('Alice', 50); // '#132DEE80' (Deep blue with 50% opacity)
 * console.log(colorWithOpacity);
 * ---------------------------------
 * @example
 * // Using with Number
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter(666); // '#FF6347FF' (Tomato)
 * console.log(color);
 *
 * const colorWithOpacity = getColorForFirstCharacter(666, 75); // '#FF6347BF' (Tomato with 75% opacity)
 * console.log(colorWithOpacity);
 * ---------------------------------
 * @example
 * // Using with Array
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const colors = getColorForFirstCharacter(['Alice', 123, 'Bob']);
 * // ['#132DEEFF', '#FFD700FF', '#1E90FFFF'] (Deep blue, Gold, Dodger blue)
 * console.log(colors);
 *
 * const colorsWithOpacity = getColorForFirstCharacter(['Alice', 123, 'Bob'], 25);
 * // ['#132DEE40', '#FFD70040', '#1E90FF40'] (Deep blue, Gold, Dodger blue with 25% opacity)
 * console.log(colorsWithOpacity);
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
