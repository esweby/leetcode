const romanNumerals = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
}

function romanNumeralToInt(str) {
    let result = 0;
    const strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        const twoLetters = `${strArr[i]}${strArr[i + 1]}`;
        let romanNumeral = strArr[i];
        if(romanNumerals[twoLetters] !== undefined) {
            romanNumeral = twoLetters;
            i++;
        }
        result += romanNumerals[romanNumeral];
    };
    return result;
}

console.log(romanNumeralToInt('III'));
console.log(romanNumeralToInt('LVIII'));
console.log(romanNumeralToInt('MCMXCIV'));
