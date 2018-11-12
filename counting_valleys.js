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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleycounter = 0;
    let valleyenter = 0;
    let valleyexit = 0;
    let sealevel = 0;
    let arr = s.split("");
    for (let i = 0; i < n; i++) {
        if (s[i] == 'D') {
            sealevel--;
        }
        else {
            sealevel++;
        }
        if (sealevel < 0 && valleyenter != 1) {
            valleyenter++;
        }
        if (sealevel == 0 && valleyexit != 1 && s[i] == 'U') {
            valleyexit++;
        }
        if (valleyenter == 1 && valleyexit == 1) {
            valleycounter++;
            valleyenter = 0;
            valleyexit = 0;
        }
        
    }
    return valleycounter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}