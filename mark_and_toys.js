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

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    // let sum of prices of toys that can be bought for money 'k' = 0, number of toys also = 0;
    let sum = 0;
    let numOfToys = 0;
    // while sum is less than money to spend
    while (sum <= k) {
        // set the minPrice to be the first price in the array
        let minPrice = prices[0];
        // declare index, we will need it to splice the min element in the array after we add it to sum
        let index;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
                index = i;
            }
        }
        sum += minPrice;
        numOfToys++;
        // remove minPrice from the array
        prices.splice(index, 1);
    }
    // return numOfToys - 1 because the sum after while loop will always be greater than k
    return numOfToys - 1;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
