function findLuckyNumber(nums) {
    const pareIndex = {};
    let maxLucky = -1;


    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (value in pareIndex) {
            pareIndex[value]++;
        } else {
            pareIndex[value] = 1;
        }

    }


    for (let name in pareIndex) {
        let key = Number(name);
        let frequency = pareIndex[name]
        if (key === frequency) {
            if (key > maxLucky) {
                maxLucky = key
            }
        }
    }

    return maxLucky;
}

// console.log(findLuckyNumber([2, 2, 3, 3, 3, 4, 4, 4, 4]));

//code optimized

function findLuckyNumber(nums) {
    const pareIndex = {};
    let maxLucky = -1;


    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        pareIndex[value] = (pareIndex[value] || 0) + 1
    }

    for (let name in pareIndex) {
        if (Number(name) === pareIndex[name] && Number(name) > maxLucky) {
            maxLucky = Number(name)
        }
    }

    return maxLucky;
}

console.log(findLuckyNumber([2, 2, 3, 3, 3, 4, 4, 4, 4]));
