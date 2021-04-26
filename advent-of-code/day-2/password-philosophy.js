//Reads the input file
var fs = require("fs");
var text = fs.readFileSync("input2.txt", "utf-8");

var textByLine = text.trim().split('\n');

function partOne() {
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

        if(charCount >= minMax[0] && charCount <= minMax[1]) {
            validCount++;
        }
    }

    console.log("Pt. 1: " + validCount);
}

function partTwo() {
    var validCount = 0;
    for(let i = 0; i < textByLine.length; i++) {
        var check = textByLine[i].split(': ');
        var passPolicy = check[0];
        var keyChar = passPolicy[passPolicy.length - 1];
        var password = check[1];

        var positionsSubstring = passPolicy.substring(0, passPolicy.indexOf(' '));
        var positions = positionsSubstring.split('-').map(function(item){
            return parseInt(item, 10); //gets the number value in base 10 form
        }); 

        var charInValidPos = false;
        //XOR Gate to check if either keyChar is in position 1 or 2 but not both/neither
        if(((password[positions[0] - 1] == keyChar) || (password[positions[1] - 1] == keyChar)) && !((password[positions[0] - 1] == keyChar) && (password[positions[1] - 1] == keyChar))) {
            charInValidPos = true;
        }

        if(charInValidPos == true) {
            validCount++;
        }
        
    }

    console.log("Pt. 2: " + validCount);
}
 
partOne();
partTwo();
