//Reads the input file
const fs = require("fs");
const text = fs.readFileSync("input3.txt", "utf-8");

const textByLine = text.trim().split('\n');

var numTreesEncountered = (run, rise) => {
    var count = 0;
    var x = 0;
    var y = 0;
    var lineLastIndex = textByLine[0].length - 1;

    while(y < textByLine.length - 1) {
        ///Conditional to check if you need to loop back to the beginning of the line if you are near the end of the row
        if((lineLastIndex - x) < run) {
            x = x - lineLastIndex - 1;
        }
        x += run;
        y += rise;

        if(textByLine[y][x] === "#") {
            count++;
        }
    }
    return count;
};


console.log("Number of Trees Encountered on Slope: " + numTreesEncountered(3, 1)); //Part 1 Answer

const partTwoAnswer = numTreesEncountered(1, 1) * numTreesEncountered(3, 1) * numTreesEncountered(5, 1) * numTreesEncountered(7, 1) * numTreesEncountered(1, 2);
console.log("Part Two Answer: " + partTwoAnswer);