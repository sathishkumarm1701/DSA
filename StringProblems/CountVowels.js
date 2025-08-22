function countVowels(str) {

    let countVow = 0

    let vowels = ["a", "e", "i", "o", "u"]


    for (let i = 0; i < str.length; i++) {
        // if (vowels.includes(str[i])) {
        //     countVow++
        // }

        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                countVow++
            }
        }
    }

    return countVow
}


console.log(countVowels("aeiouaeiou"))