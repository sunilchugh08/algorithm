var twoSum = function (nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        let first = nums[i];
        let second = nums.indexOf(target - first);
        console.log("first ", first, " second ", second, " target-first ", (target - first))
        if (second != -1 && i != second) {
            return [i, second]
        }

    }
};

let nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target))