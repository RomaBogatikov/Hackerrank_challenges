'use strict';

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

// Complete the countSwaps function below.
function countSwaps(a) {
    let numSwaps = 0;
    // for every element in an array
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // if left element is greater than right element, swap them
            if (a[j] > a[j + 1]) {
                let save = a[j];
                a[j] = a[j + 1];
                a[j + 1] = save;
                numSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);

}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
