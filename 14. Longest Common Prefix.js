function findLongestCommonPrefix(str) {

    if (!str.length) return "ss"
    if (str.length === 1) return str[0]
    let result = ""


    for (let i = 0; i < str[0].length; i++) {
        const firstStr = str[0][i];
        for (let j = 1; j < str.length; j++) {
            // console.log(str[j][i], "sssdsdsd");

            if (str[j][i] !== firstStr) {
                return result
            }
        }
        result += firstStr
    }

    return result
}

let strs = ["flower", "flow", "flight"]

console.log(findLongestCommonPrefix(strs));