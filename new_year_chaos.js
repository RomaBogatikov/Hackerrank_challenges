function minimumBribes(q) {

    let numberOfBribes;
    const result = q.every(function (value, index) {
        return value - index < 4;
    })

    if (result) {
        numberOfBribes = 0;
        q.forEach(function (value, index) {
            if (value - index === 3) {
                numberOfBribes +=2;
            }
            else if (value - index ===2) {
                numberOfBribes++;
            }
        })
    }
    else {
        numberOfBribes = "Too chaotic";
    }

    return numberOfBribes;


}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));