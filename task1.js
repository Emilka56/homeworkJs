//
// let names = ['Дамир', {name:'Самира', female: 'Яхудина'}, 'Эмилия', true];
// console.log(names[2]);
// console.log(names[1].female);
// delete(names[1].female);
// console.log(names[1])
// names.push('Резеда');
// names.unshift('Женя');
// console.log(names);
// names.pop();
// names.shift();
// console.log(names);
// names.forEach((item, index, arr)=>{
//     console.log('имя: '+item)
//     console.log('индекс: '+index)});

function isPalindrome(x) {
    if(x<0){
        return false;
    }else {
        let number = x.toString().split('');
        let reverseNumber = x.toString().split('').reverse();

        isDigit = true;
        number.forEach((digit, index)=>{
            if((digit!==reverseNumber[index])){
                isDigit = false;
            }
        });
    }
    return isDigit;
}
let x = 121;
console.log(isPalindrome(x));
x = -121;
console.log(isPalindrome(x));
x = 10;
console.log(isPalindrome(x));