

function findLargest(arr) {
    const sorted = arr.sort();
    let largest = sorted[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}


console.log(findLargest([3, 2, 3, 5, 7, 9, 2, 1]));
