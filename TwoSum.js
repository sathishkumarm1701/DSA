
//Brutal Force Solution
function TwoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(TwoSum([2, 7, 11, 15], 9));

console.log("SSSSSSSSS");

function TwoSumOptimal(nums, target) {
    const pareIndex = {};
    for (let i = 0; i < nums.length; i++) {
       const result = target - nums[i];
       if(result in pareIndex){
        return [pareIndex[result],i]
       }
       pareIndex[nums[i]] = i
    }
}
console.log(TwoSumOptimal([2, 7, 11, 15], 9));



