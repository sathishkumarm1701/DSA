// The function singleNumber should return the element that appears only once in the array
// while all other elements appear exactly twice.
// In this case, 1 is the only element that appears once.
// The function is expected to run in O(n) time complexity and use O(1) space complexity.
// The expected output is 1.
// The function should handle cases where the input array is empty or contains only one element.
// For example, singleNumber([]) should return undefined, and singleNumber([5]) should return 5.        ]
// The function singleNumber should return the element that appears only once in the array

// while all other elements appear exactly twice.
// In this case, 1 is the only element that appears once.

function singleNumber(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]; // Using XOR operation to find the single number
    }
    return result;
}

console.log(singleNumber([2, 2, 1])); // Output: 1