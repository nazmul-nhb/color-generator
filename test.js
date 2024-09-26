"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("./dist");
var color = (0, dist_1.getColorForFirstLetter)('humayun');
console.log(color);
var letters = 'abcdefghijklmnopqrstuvwxyz';
for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
    var letter = letters_1[_i];
    console.log((0, dist_1.getColorForFirstLetter)(letter));
}
