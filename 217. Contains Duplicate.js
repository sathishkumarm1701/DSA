var containsDuplicate = function (nums) {
    let pareIndex = {}
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        if (value in pareIndex) {
            pareIndex[value] += 1
            return true
        } else {
            pareIndex[value] = 1
        }
    }
    return false
};

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3])); // Output: true
console.log(containsDuplicate([]));
console.log(containsDuplicate([5])); // Output: false