//Reads the input file
var fs = require("fs");
var text = fs.readFileSync("day-1/input.txt", "utf-8");

//Makes a list with all the input values from the file separated
var textByLine = text.split('\n').map(function(item){
    return parseInt(item, 10); //gets the number value in base 10 form
});

//Part 1
for(let i = 0; i < textByLine.length; i++){
    for(let j = i; j < textByLine.length; j++){
        if(i !== j){
            if(textByLine[i] + textByLine[j] == 2020){
                console.log(textByLine[i] * textByLine[j]);
            }
        }
    }
}

//Part 2
for(let i = 0; i < textByLine.length; i++){
    for(let j = i; j < textByLine.length; j++){
        for(let k = j; k < textByLine.length; k++){
            if(i !== j){
                if(j !== k){
                    if(textByLine[i] + textByLine[j] + textByLine[k] == 2020){
                        console.log(textByLine[i] * textByLine[j] * textByLine[k]);
                    }
                }
            }
        }
    }
}