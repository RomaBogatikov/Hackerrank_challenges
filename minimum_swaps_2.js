// Complete the minimumSwaps function below.

function minimumSwaps(arr) {
    function swap(array, ind1, ind2) {
        let saved = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = saved;
        return array
    }
    let counter = 0;
    let n = arr.length;
    for (let i = 1; i <= n; i++) {
        let index = arr.indexOf(i);
        console.log('index = ', index, 'arr[i-1] = ', arr[i-1], 'arr[index] = ', arr[index]);
        if (index !== i - 1) {
            arr = swap(arr, i - 1, index);
            console.log('arr= ', arr);
            counter++;
            console.log('counter= ', counter);
        }
    }
    return counter;
};

minimumSwaps([4, 3, 1, 2]);



