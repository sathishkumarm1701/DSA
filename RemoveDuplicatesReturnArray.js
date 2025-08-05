function removeDuplicates(nums) {
    let arr = []
    let k = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.indexOf(nums[i]) === i) {
            arr[k] = nums[i]
            k++
        }
    }
    return arr
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 2, 3, 4]))

// (4) [1, 2, 3, 4]