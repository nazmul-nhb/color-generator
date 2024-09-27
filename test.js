"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("./dist");
var color1 = (0, dist_1.getColorForFirstCharacter)('Mamun');
var color2 = (0, dist_1.getColorForFirstCharacter)('RuPa');
var color3 = (0, dist_1.getColorForFirstCharacter)(color1);
console.log({ color1: color1, color2: color2, color3: color3 });
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const n of '0123456789') {
// 	console.log(getColorForFirstCharacter(n));
// }
