'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    //initialize a variable to count the number of occurences of letter 'a'
    let counter = 0;
    //apply function to every element of an array s
    s.split('').forEach(function (currentValue, index) {
        //if currentValue === "a", increase counter by the number of strings s that fit into n
        if (currentValue === "a") {
            counter += Math.floor(n / s.length);
            //if the remainder is greater than index of an element, increase counter by one
            if (n % s.length > index) {
                counter++;
            }
        }
    })

    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}