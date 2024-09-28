import { getColorForFirstCharacter } from './dist';

const color1 = getColorForFirstCharacter('Mamun', 40);
const color2 = getColorForFirstCharacter('Mamun');
const color3 = getColorForFirstCharacter(color1);

console.log({ color1, color2, color3 });

// const letters = 'abcdefghijklmnopqrstuvwxyz';

// for (const n of '0123456789') {
// 	console.log(getColorForFirstCharacter(n));
// }
