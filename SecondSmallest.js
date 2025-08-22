

function secondSmallest(arr) {

    let smallest = arr[0];
    let ssmallest = -1;

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        if (element < smallest) {
            ssmallest = smallest
            smallest = arr[i]
        } else if (element > smallest && element < smallest) {
            ssmallest = element
        }
    }
    return ssmallest
}
console.log(secondSmallest([2, 1, 2, 2, 2, 2, 2, 0])); // 1
console.log(secondSmallest([1, 0, , 1, 1, 1, 1, 1, 1, 11])); // 1
console.log(secondSmallest([5, 5, 5, 5])); // null - only one unique value
console.log(secondSmallest([0, -1, -5, -3])); // -3
console.log(secondSmallest([100, 200, 300, 400])); // 200
console.log(secondSmallest([-10, -20, -30, -40, -50])); // -40
console.log(secondSmallest([5])); // null - only one element
console.log(secondSmallest([1, 2])); // 2
console.log(secondSmallest([2, 1])); // 2
console.log(secondSmallest([1, 1, 1, 1, 2])); // 2
console.log(secondSmallest([2, 1, 1, 1, 1, 1])); // 2
console.log(secondSmallest([, , , 1, 2, 3])); // 2 (skip holes)
console.log(secondSmallest([1, 2, 2, 2, 2, 3, 4, 5])); // 2
console.log(secondSmallest([999999, 999998, 999997])); // 999998
console.log(secondSmallest([3, 1, 2, 1, 2, 1, 2])); // 2
console.log(secondSmallest([3, 2, 1, 0, -1, -2, -3])); // -2
console.log(secondSmallest(Array(20000).fill(5).concat([6, 4]))); // 5
