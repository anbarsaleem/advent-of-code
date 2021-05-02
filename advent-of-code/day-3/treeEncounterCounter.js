//Reads the input file
var fs = require("fs");
var text = fs.readFileSync("input3.txt", "utf-8");

var textByLine = text.trim().split('\n');

var numTreesEncountered = 0;
var x = 0;
var y = 0;
var lineLastIndex = textByLine[0].length - 1;

while(y < textByLine.length - 1) {
    ///Conditional to check if you need to loop back to the beginning of the line if you are near the end of the row
    if((lineLastIndex - x) < 3) {
        x = x - lineLastIndex - 1;
    }
    x += 3;
    y++;

    if(textByLine[y][x] === "#") {
        numTreesEncountered++;
    }
}

console.log("Number of Trees Encountered on Slope: " + numTreesEncountered);

