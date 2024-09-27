"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("./dist");
var color1 = (0, dist_1.getColorForFirstLetter)('Mamun');
var color2 = (0, dist_1.getColorForFirstLetter)(756);
console.log({ color1: color1, color2: color2 });
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const n of '0123456789') {
// 	console.log(getColorForFirstLetter(n));
// }
