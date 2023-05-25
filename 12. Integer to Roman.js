const romanNumerals = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M',
}

var intToRoman = function(num) {
    if(!num) return 0;
    
    let place = 1;
    let result = [];
    while(num > 0) {
        result.push(convertNumberToNumeral(num % 10, place));
        place *= 10;
        num = Math.floor(num / 10);
    }
    return result.reverse().join('');
}

const convertNumberToNumeral = (n, p) => {
    if(getNumeral(n * p)) {
        return getNumeral(n * p);
    }
    
    let result = '';
    for(let i = 1 * p; i <= n * p; i += p) {
        if(getNumeral(i)) {
            result = getNumeral(i);
        } else {
            result += getNumeral(1 * p);
        }
    }
    return result;
}

const getNumeral = (n) => romanNumerals[`${n}`];
