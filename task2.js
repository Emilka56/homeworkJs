function findIndex(nums, target) {
    let numbers=nums.slice(0,nums.length);
    let sortedNumbers=nums.sort((a, b) => a - b);
    l = 0;
    r = nums.length - 1;
    while(l != r) {
        if (sortedNumbers[l] + sortedNumbers[r] < target) {
            l++;
        }
        else if (sortedNumbers[l] + sortedNumbers[r] > target) {
            r--;
        }
        else {
            return [numbers.indexOf(sortedNumbers[l]), numbers.lastIndexOf(sortedNumbers[r])];
        }
    }
}

let nums = [2,7,11,15];
let target = 9;
console.log(findIndex(nums, target));

nums = [3,2,4];
target = 6;
console.log(findIndex(nums, target));

nums = [3,3];
target = 6;
console.log(findIndex(nums, target));

