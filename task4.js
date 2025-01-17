let nums = [1,1,2];
function UniqueNumbers(nums) {
    let arr=[];
    let k = 0;
    nums.forEach((number)=>{
        if(!(arr.includes(number))){
            arr.unshift(number);
            k++;
        }else{
            arr.push('_');
        }
    });
    arr.sort((a, b) => a - b);
    console.log(k);
    console.log(arr);
}
UniqueNumbers([1,1,2]);
UniqueNumbers([0,0,1,1,1,2,2,3,3,4]);