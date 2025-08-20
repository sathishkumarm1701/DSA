function moveAllZeros(arr) {

    let temp = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            temp.push(arr[i])
        } else {
            zeros.push(arr[i])
        }
    }
    let k = temp.length - 1
    for (let j = 0; j < zeros.length; j++) {
        // console.log(zeros[j], "JJJJJ", temp[temp.length - 1], "000", zeros[j]);
        temp[k] = zeros[j]
        k++
    }
    return temp
}

console.log(moveAllZeros([1, 4, 0, 2, 4, 0, 5, 0]));


