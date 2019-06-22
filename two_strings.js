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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    // we want to put only non-repeating letters from strings s1 and s2 into s1Array and s2Array to reduce runtime
    let s1Array = [s1[0]];
    let s2Array = [s2[0]]
    for (let i = 1; i < s1.length; i++) {
        if (!s1Array.includes(s1[i])) {
            s1Array.push(s1[i])
        }
    }
    for (let i = 1; i < s2.length; i++) {
        if (!s2Array.includes(s2[i])) {
            s2Array.push(s2[i])
        }
    }

    // for every letter in s1Array
    for (let i = 0; i < s1Array.length; i++) {
        // if this letter is in s2Array, return 'YES'
        if (s2Array.includes(s1Array[i])) return 'YES';
        // for (let j = 0; j < s2Array.length; j++) {
        //     if (s1Array[i] === s2Array[j]) return 'YES';
        // }
    }
    // otherwise, return 'NO'
    return 'NO';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
