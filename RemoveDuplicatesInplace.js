

//Remove Duplicates in-Place in the array


function removeDuplicatesInPlace(arr) {
    let i = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    console.log('====================================');
    console.log(arr);
    console.log('====================================');
    return i + 1
}


console.log('====================================');
console.log(removeDuplicatesInPlace([1, 1, 2, 2, 3, 3]));
console.log('====================================');