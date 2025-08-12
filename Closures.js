function outerFunction() {
    let count = 0
    function innerFunction() {
        return count++
    }
    return innerFunction
}

const result = outerFunction()
console.log(result())
console.log(result())
console.log(result())