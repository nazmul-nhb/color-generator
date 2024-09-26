import { colorPalette } from './constants';

export const getColorForFirstLetter = (string: string) => {
	const initial = string[0];

	// Convert initial to uppercase
	const upperInitial = initial.toUpperCase();

	// Get ASCII code of the initial and subtract ASCII code of 'A' to start from 0
	const index = upperInitial.charCodeAt(0) - 'A'.charCodeAt(0);

	// Check if index is valid
	if (index < 0 || index >= colorPalette.length) {
		console.warn('🛑 Invalid Character at Index: ', index);
		return null; // or return a default color
	}

    console.log({ initial, upperInitial, index });
    
	return colorPalette[index];
};

