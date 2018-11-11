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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // set counter to 1 (non-zero value) to start the while loop (bubble sort)
    let counter = 1;

    //sort the array in ascending order (bubble sort)
    while (counter != 0) {
        //set counter to 0
        counter = 0;
        //if adjacent pair of elements is not in order, swap them
        for (let i = 0; i < n; i++) {
            if (ar[i] > ar[i + 1]) {
                let swap = ar[i + 1];
                ar[i + 1] = ar[i];
                ar[i] = swap;
                counter++;
            } 
        }
    }

    //set number of pairs of socks to zero
    let pairs = 0;

    //if two adjacent socks have the same color, add 1 to pairs (counter) and add 1 to i to skip the pair
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            pairs++;
            i++;
        }
    }
    return pairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
