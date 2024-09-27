import { getColorForFirstLetter } from './dist';

const color1 = getColorForFirstLetter('Mamun');
const color2 = getColorForFirstLetter([1, 2, 'abba', 'kallyan']);

console.log({ color1, color2 });

// const letters = 'abcdefghijklmnopqrstuvwxyz';

// for (const n of '0123456789') {
// 	console.log(getColorForFirstLetter(n));
// }
