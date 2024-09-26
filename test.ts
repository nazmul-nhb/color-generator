import { getColorForFirstLetter } from './dist';

const color = getColorForFirstLetter('humayun');

console.log(color);

const letters = 'abcdefghijklmnopqrstuvwxyz';

for (const letter of letters) {
	console.log(getColorForFirstLetter(letter));
}
