var twoSum = function (nums, target) {
    let map = new Map();
    let length = nums.length;
    for (let i = 0; i < length; i++) {

        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);

    }
};

let nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target))