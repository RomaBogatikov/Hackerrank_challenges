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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, n) {
    // set our 'counter' of jumps to 0
    let counter = 0;
    //declare a 'position' identifier to store the number how far it should jump (+1 or +2 clouds)
    let position;
    //iterate over elements of the array 'c', then increment 'i' by the 'position'
    for (let i = 0; i < n-1; i = i + position) {
            position = 0;
            if (c[i + 2] === 0) {
                position = position + 2;
            }
            else {
                position = position + 1;
        };
        counter++;
    }
    return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, n);

    ws.write(result + "\n");

    ws.end();
}