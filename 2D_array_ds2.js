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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    //initialize an empty array to store the sums of hourglasses
    let arraySum = [];
    //initialize a variable to store a sum of one hourglass
    let hourGlass;
    //find the sums of all hourglasses in a given array 'arr'
    arr.forEach(function (currentValueRow, indexRow) {
        currentValueRow.forEach(function (currentValueNumber, indexNumber) {
            if (indexNumber > 3 || indexRow > 3) {
                return;
            }
            else {
                hourGlass = currentValueNumber + arr[indexRow][indexNumber + 1] + arr[indexRow][indexNumber + 2] + arr[indexRow + 1][indexNumber + 1] + arr[indexRow + 2][indexNumber] + arr[indexRow + 2][indexNumber + 1] + arr[indexRow + 2][indexNumber + 2];
                arraySum.push(hourGlass);
            }
        })
    })
    //implement a merge sort algorithm to sort 'arraySum' (array of sums of hourglasses)
    //split the array in halves and then recursively merge them
    function mergeSort(array) {
        //return if there is only one item in an array
        if (array.length === 1) {
            return array
        }
        else {
            //find the middle of the 'array' and split in into two arrays
            const middle = Math.floor(array.length / 2);
            const left = array.slice(0, middle);
            const right = array.slice(middle);

            return merge(mergeSort(left), mergeSort(right))
        }
    }

    //compare the arrays and return the concatenated result
    function merge(left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                indexLeft++;
            }
            else {
                result.push(right[indexRight]);
                indexRight++;
            }
        }
        //we already have the the smallest number in the 'result' array so we want to concat the remaining number (we use concat instead of push because concat returns the new array, not the lenght of a new array like push)
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
    //sort the array of sums of hourglasses
    let sortedArray = mergeSort(arraySum);
    //return the last (biggest) element of the array
    return sortedArray[sortedArray.length - 1];
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
