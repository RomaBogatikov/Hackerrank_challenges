'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    // variable to count the number of letters of string 'a' that are in string 'b'
    let countLettersOfAinB = 0;
    for (let i = 0; i < a.length; i++) {
        // find the index of letter from string 'a' in string 'b'
        let indexOfLetter = b.indexOf(a[i]);
        // if the letter from string 'a' is in string 'b'
        if (indexOfLetter !== -1) {
            // increase counter
            countLettersOfAinB++;
            // remove found letter from string 'b'
            b = b.slice(0, indexOfLetter) + b.slice(indexOfLetter + 1, b.length + 1);
        }
    }
    // result will be equal to the difference between the length of string 'a' and the number of letters from string 'a' that are in string 'b' plus the length of string 'b', that is modified and includes only letters that are not found in string 'a'
    let result = a.length - countLettersOfAinB + b.length;
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
