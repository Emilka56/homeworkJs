function isValid(s){
    let str = s.split('');
    let arr = [];
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let flag=true;
    str.forEach((item)=>{
        if([')', ']', '}'].indexOf(item)>-1){
            if (brackets[item]!==arr.pop()){
                flag = false;
            }
        }else{
            arr.push(item);
        }
    });
    return flag;
}
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));

