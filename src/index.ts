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
 * - Invalid characters and inputs are handled with a fallback color.
 *
 * @param {string | number | (string | number)[]} arg - A string, number, or an array of strings/numbers.
 * @param {Opacity} [opacity=100] - A value from 0 to 100 representing the opacity percentage.
 * @returns {string | string[]} A hex color for a string/number, or an array of hex colors for each element of the provided array.
 *
 * @example
 * // Using with String
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 * 
 * const color = getColorForFirstCharacter('Alice');
 * // '#00094CFF'
 * console.log(color);
 * 
 * const colorWithOpacity = getColorForFirstCharacter('Alice', 50);
 * // '#00094C80' (with 50% opacity)
 * console.log(colorWithOpacity);
 * ---------------------------------
 * @example
 * // Using with Number
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter(666);
 * // '#A43522FF'
 * console.log(color);
 *
 * const colorWithOpacity = getColorForFirstCharacter(666, 75);
 * // '#A43522BF' (with 75% opacity)
 * console.log(colorWithOpacity);
 * ---------------------------------
 * @example
 * // Using with Array
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const colors = getColorForFirstCharacter(['Alice', 123, 'Bob']);
 * // ['#00094CFF', '#A44C15FF', '#00376EFF']
 * console.log(colors);
 *
 * const colorsWithOpacity = getColorForFirstCharacter(['Alice', 123, 'Bob'], 25);
 * // ['#00094C40', '#A44C1540', '#00376E40'] (with 25% opacity)
 * console.log(colorsWithOpacity);
 * ---------------------------------
 * @example
 * // Handling Invalid Input - Returns fallback color
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter('!@#');
 * // '#010514FF'
 * console.log(color);
 * ---------------------------------
 * @example
 * // Handling Invalid Input - Returns fallback color
 * import { getColorForFirstCharacter } from 'color-generator-fl';
 *
 * const color = getColorForFirstCharacter({name: 'John Doe'});
 * // '#010514FF'
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
		if (!arg) return '#010514' + hexOpacity;
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

		return '#010514' + hexOpacity;
	} else if (typeof arg === 'number' && !isNaN(arg)) {
		// Handle number input
		initial = arg.toString()[0];
		if ('0123456789'.includes(initial)) {
			return numberColorPalette[parseInt(initial)] + hexOpacity;
		}

		return '#010514' + hexOpacity;
	} else if (Array.isArray(arg)) {
		// Handle array of strings/numbers
		return arg.flatMap((el) => {
			const color = getColorForFirstCharacter(el, opacity);
			return Array.isArray(color) ? color : [color]; // Flatten if nested arrays
		});
	}

	return '#010514' + hexOpacity;
};
