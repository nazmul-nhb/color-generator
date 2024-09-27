import { getColorForFirstLetter } from './dist';

const color1 = getColorForFirstLetter('Mamun');
const color2 = getColorForFirstLetter('0amun');

console.log({ color1, color2 });

// const letters = 'abcdefghijklmnopqrstuvwxyz';

// for (const letter of letters) {
// 	console.log(getColorForFirstLetter(letter));
// }
