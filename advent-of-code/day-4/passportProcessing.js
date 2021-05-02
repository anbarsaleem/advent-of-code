//Reads the input file
const fs = require("fs");
const text = fs.readFileSync("day-4/input4.txt", "utf-8");
//Separates file into an array with each line including blank lines
const lineByLine = text.split('\n');

var untrimmedpassports = [];
let str = "";
//Serves to separate blocks of text that have a blank line in between them into an array of separate passports
lineByLine.forEach(line => {
    if(line.length > 0) {
        str += (line + " ");
    } else {
        untrimmedpassports.push(str);
        str = "";
    } 
});

//Makes a final usable passport array without any extra whitespace on the edges
const passports = untrimmedpassports.map(x => x.trim());

