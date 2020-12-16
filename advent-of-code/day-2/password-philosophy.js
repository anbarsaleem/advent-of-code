//Reads the input file
var fs = require("fs");
var text = fs.readFileSync("day-2/input2.txt", "utf-8");

var textByLine = text.split('\n');

var validCount = 0;
for(let i = 0; i < textByLine.length; i++){
    var check = textByLine[i].split(': ');
    var passPolicy = check[0];
    var password = check[1];

    var charCount = 0;
    for(let j = 0; j < password.length; j++){
        if(password[j] == passPolicy[passPolicy.length - 1]) {
            charCount++;
        }
    }

    var minMaxSubstring = passPolicy.substring(0, passPolicy.indexOf(' '));
    var minMax = minMaxSubstring.split('-').map(function(item){
        return parseInt(item, 10); //gets the number value in base 10 form
    });

    if(charCount >= minMax[0] && charCount <= minMax) {
        validCount++;
    }
}

console.log(validCount);