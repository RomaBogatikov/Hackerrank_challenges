///////////////////////
/// THIS SOLUTION GETS ONLY 14 POINTS OUT OF 35
////////////////////////////

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    // create an array to push triplets to
    let newArr = [];
    let count = 0;
    // arr = arr.filter(number => number % 5 === 0  number)
    if (r === 1) {

    }

    // iterate over every element in array 'arr'
    for (let i = 0; i < arr.length; i++) {
        // put element arr[i] into a newArr at position i
        newArr[i] = [arr[i]];
        // iterate over next elements of arr
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] === newArr[i][0] * r) {


                // push element into newArr[i] array
                newArr[i].push(arr[j]);
                if (newArr[i].length === 2) {
                    for (let n = j + 1; n < arr.length; n++) {
                        if (arr[n] > newArr[i][1] * r) {
                            break;
                        }
                        if (arr[n] === newArr[i][1] * r) {
                            count++;
                        }

                    }
                    newArr[i].pop();
                }
            }
            if (arr[j] > newArr[i][0] * r) {
                break;
            }
        }
    }

    // let result = {
    //     first: [],
    //     second: [],
    //     third: [],
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % r ** 2 === 0) {
    //         result.third.push(arr.splice(i, 1)[0]);
    //         i--;
    //     } else if (arr[i] % r === 0) {
    //         result.second.push(arr.splice(i, 1)[0]);
    //         i--;
    //     }
    // }

    // arr = arr.filter(element => result.second.includes(element * r));

    // count = arr.length * result.second.length * result.third.length;

    console.log(newArr);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
