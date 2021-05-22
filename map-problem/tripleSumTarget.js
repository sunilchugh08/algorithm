var threeSum = function (nums) {
    let result = []

    if (nums.length < 3) { return [] }
    if (nums.length === 3) {
        let sum = nums.reduce(function (acc, cv) {
            return acc + cv
        }, 0)
        return sum === 0 ? [nums] : []
    }

    nums = nums.sort(function (a, b) { return a - b })

    for (let i = 0; i < nums.length - 2; i++) {

        let j = i + 1
        let k = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue

        while (j < k) {
            console.log("i ", i, " j ", j)
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while (nums[k] === nums[k - 1]) k--
                while (nums[j] === nums[j + 1]) j++
                k--
                j++
            } else if (sum < 0) {
                j++
            } else {
                k--
            }


        }

    }

    return result
};

let nums = [-1, 0, 1, 2, -1, -4];
// 3 unique number whos sum is zero

console.log(threeSum(nums))