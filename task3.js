function convertToInt(s) {
    let result = 0;
    arr = s.split('');
    arr.unshift(' ');
    arr.push(' ');
    arr.forEach((item, index) => {
        if (item === 'I') {
            if (item + arr[index + 1] === 'IV') {
                result += 4;
            } else if (item + arr[index + 1] === 'IX') {
                result += 9;
            } else {
                result += 1;
            }
        } else if (item === 'X' && arr[index - 1] !== 'I') {
            if (item + arr[index + 1] === 'XL') {
                result += 40;
            } else if (item + arr[index + 1] === 'XC') {
                result += 90
            } else {
                result += 10
            }
        } else if (item === 'C' && arr[index - 1] !== 'X') {
            if (item + arr[index + 1] === 'CD') {
                result += 400;
            } else if (item + arr[index + 1] === 'CM') {
                result += 900
            } else {
                result += 100
            }
        } else if (item === 'V' && arr[index - 1] !== 'I') {
            result += 5;
        } else if (item === 'L' && arr[index - 1] !== 'X') {
            result += 50;
        } else if (item === 'D' && arr[index - 1] !== 'C') {
            result += 500;
        } else if (item === 'M' && arr[index - 1] !== 'C') {
            result += 1000;
        } else {
            result += 0;
        }
    });
    return result;
}

let s = 'IX';
console.log(convertToInt(s));

s = 'LVIII';
console.log(convertToInt(s))

s = 'MCMXCIV';
console.log(convertToInt(s));

