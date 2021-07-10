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

// Complete the rotLeft function below.
// function rotLeft(a, d) {
//     //declare finalArray to store the array shifted d units to the left
//     let finalArray;
//     //if d === 0 (array is not shifted), then return an initial array
//     if (d === 0) {
//         return a;
//     }
//     //otherwise shift the array d units to the left
//     else {
//         finalArray = a.reduce(function (accumulator, currentValue, index, array) {
//             accumulator[(index - d % array.length + array.length) % array.length] = currentValue;
//             return accumulator;
//         }, [])
//     }

//     return finalArray;
// }

// O(n) time, O(n) space
function rotLeft(a, d) {
    // Write your code here
    let aLength = a.length;
    let shiftLeft = d % aLength;

    return [...a.slice(shiftLeft), ...a.slice(0, shiftLeft)]
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
