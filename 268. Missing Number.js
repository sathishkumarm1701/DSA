function missingNumber(arr) {

    let xor1 = 0
    for (let i = 1; arr.length; i++) {
        xor1 ^= i;
    }

    let xor2 = 0
    for (let j = 0; j < arr.length - 1; j++) {
        xor2 ^= arr[j]
    }
    console.log('====================================');
    console.log(xor1);
    console.log(xor2);
    console.log('====================================');
    return xor1 ^ xor2
}

console.log(missingNumber([1, 3, 4, 5]))