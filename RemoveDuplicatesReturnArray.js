function removeDuplicates(nums) {
    let arr = []
    let k = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.indexOf(nums[i]) === i) {
            arr[k++] = nums[i]
        }
    }
    return arr
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3]))

// (4) [1, 2, 3, 4]

//Remove Duplicate in place

function removeDuplicatesOptimal(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j];
            i++
        }
    }
    return i + 1
}

console.log(removeDuplicatesOptimal([1, 1, 2, 2, 2, 3, 3]), "optimal")