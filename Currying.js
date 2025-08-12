function Currying(a) {
    return function (b) {
        return a + b
    }
}

console.log(Currying(2)(3));
