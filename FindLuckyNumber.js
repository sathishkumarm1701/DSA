function findLuckyNumber(nums){
    const pareIndex = {};
    for(let i = 0; i < nums.length;i ++){
        const value = nums[i];
        if(value in pareIndex){
            pareIndex[value]++;
        }else{
           pareIndex[value] = 1;
        }  

    }
let maxLucky = -1;
  for (let name in pareIndex) {
      let key = Number(name);
      let frequency = pareIndex[name]
      if(key === frequency){
          if(key > maxLucky){
              maxLucky = key
          }
      }
  }
    
    return maxLucky;
}

console.log(findLuckyNumber([2,2,3,3,3,4,4,4,4]));