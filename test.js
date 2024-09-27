"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("./dist");
var color1 = (0, dist_1.getColorForFirstLetter)('Mamun');
var color2 = (0, dist_1.getColorForFirstLetter)('0amun');
console.log({ color1: color1, color2: color2 });
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const letter of letters) {
// 	console.log(getColorForFirstLetter(letter));
// }
