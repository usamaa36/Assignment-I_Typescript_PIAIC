"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter your age: ', function (ageString) {
    var ageOfUsama = Number(ageString);
    if (ageOfUsama < 2) {
        console.log('usama is a baby');
    }
    else if (2 <= ageOfUsama && ageOfUsama < 4) {
        console.log('usama is a toddler');
    }
    else if (4 <= ageOfUsama && ageOfUsama < 13) {
        console.log('usama is a kid');
    }
    else if (13 <= ageOfUsama && ageOfUsama < 20) {
        console.log('usama is a teenager');
    }
    else if (20 <= ageOfUsama && ageOfUsama < 65) {
        console.log('usama is an adult');
    }
    else if (ageOfUsama <= 65) {
        console.log('usama is an elder');
    }
});
