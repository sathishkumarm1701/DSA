function findSecondLargest(arr) {
    let slargest = -1;
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let ielement = arr[i]
        if (ielement > largest) {
            slargest = largest
            largest = ielement;

        } else if (ielement < largest && ielement > slargest) {
            slargest = ielement
        }
    }
    return slargest
}

console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7]));
console.log(findSecondLargest([7, 7, -1, 7, 7]));

