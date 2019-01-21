'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    // declare a counter of bribes
    let numberOfBribes;
    // if the difference between value and index >=4, result = false ("Too chaotic")
    const result = q.every(function(value, index) {
        return value - index < 4;
    })
    // if result is true
    if (result) {
        numberOfBribes = 0;
        let swap;
        let flag = 1;
        while (flag) {
            flag = 0;
            // iterate over all elements of array q
            for (let index = 0; index < q.length; index++) {
                // if element to the left is greater than element to the right, swap them
                if (q[index] > q[index + 1]) {
                    swap = q[index];
                    q[index] = q[index + 1];
                    q[index + 1] = swap;
                    numberOfBribes++;

                    flag = 1;
                }
            }


        }

    }
    // else (if result == false, )
    else {
        numberOfBribes = "Too chaotic";
    }

    return numberOfBribes;

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        var result = minimumBribes(q);
        console.log(result)
    }
}