function removeDucplicatesSortedArray(nums) {
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[i] = nums[k++]
        }
    }
    return k
}

let nums = [1, 1, 2];
let numsss = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDucplicatesSortedArray(nums))