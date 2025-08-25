//Left rotate the array by one place


function rotateArray(arr) {
    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }

    arr[arr.length - 1] = temp;
    return arr
}

console.log('====================================');
console.log(rotateArray([1, 2, 3, 4, 5]));
console.log('====================================');


//Left rotate the array by D places D is any number like 2,3,4,5...


function rotateDplaces(arr, d) {
    d = d % arr.length

    let temp = []

    for (let i = 0; i < d; i++) {
        temp[i] = arr[i]
    }

    for (let i = d; i < arr.length; i++) {
        arr[i - d] = arr[i]
    }

    let n = arr.length;

    for (let i = n - d; i < arr.length; i++) {
        arr[i] = temp[i - (n - d)]
    }

    return arr
}

console.log('====================================');
// console.log(rotateDplaces([1, 2, 3, 4, 5, 6, 7, 8], 92));
// console.log(array + array.length, "LENGTH");
// console.log(rotateDplaces(array, array + d));
// console.log(rotateDplaces(array + d, array + array.length));
// console.log(rotateDplaces(array, array + array.length));


let array = [1, 2, 3, 4, 5, 6, 7];
let d = 3;

console.log(rotateDplaces(array.slice(), d));             // rotate by 3
console.log(rotateDplaces(array.slice(), d + array.length)); // rotate by 10
console.log(rotateDplaces(array.slice(), 92));            // large rotate

// you can store and reuse results:
let d1 = d;
let d2 = d + array.length;
let d3 = array.length + d;

console.log(rotateDplaces(array.slice(), d1));
console.log(rotateDplaces(array.slice(), d2));
console.log(rotateDplaces(array.slice(), d3));

// let d3 = array.length + array;
console.log(array.slice()); // string
// console.log(d3);        // "71,2,3,4,5,6,7"

console.log('====================================');