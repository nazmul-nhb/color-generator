export type Opacity =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31
	| 32
	| 33
	| 34
	| 35
	| 36
	| 37
	| 38
	| 39
	| 40
	| 41
	| 42
	| 43
	| 44
	| 45
	| 46
	| 47
	| 48
	| 49
	| 50
	| 51
	| 52
	| 53
	| 54
	| 55
	| 56
	| 57
	| 58
	| 59
	| 60
	| 61
	| 62
	| 63
	| 64
	| 65
	| 66
	| 67
	| 68
	| 69
	| 70
	| 71
	| 72
	| 73
	| 74
	| 75
	| 76
	| 77
	| 78
	| 79
	| 80
	| 81
	| 82
	| 83
	| 84
	| 85
	| 86
	| 87
	| 88
	| 89
	| 90
	| 91
	| 92
	| 93
	| 94
	| 95
	| 96
	| 97
	| 98
	| 99
	| 100;


/**
 * Converts opacity percentage (0-100) to a 2-digit hex string.
 *
 * @param {number} opacity - The opacity value as a percentage (0-100).
 * @returns {string} A 2-digit hex string representing the alpha value.
 */
export const convertOpacityToHex = (opacity: Opacity): string => {
	// Ensure opacity is between 0 and 100
	const validOpacity = Math.min(100, Math.max(0, opacity));
	// Convert to a value between 0 and 255, then to a hex string
	const alpha = Math.round((validOpacity / 100) * 255);
	// Ensure it's 2 digits (e.g., 0x0A instead of 0xA)
	return alpha.toString(16).padStart(2, '0').toUpperCase();
};
