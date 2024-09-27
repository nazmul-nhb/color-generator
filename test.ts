import { getColorForFirstCharacter } from './dist';

const color1 = getColorForFirstCharacter('Mamun');
const color2 = getColorForFirstCharacter('RuPa');
const color3 = getColorForFirstCharacter(color1);

console.log({ color1, color2, color3 });

// const letters = 'abcdefghijklmnopqrstuvwxyz';

// for (const n of '0123456789') {
// 	console.log(getColorForFirstCharacter(n));
// }
