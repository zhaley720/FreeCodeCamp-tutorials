/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

// Test 1
console.log(twoSum([2, 7, 11, 15], 9)); // expected [0, 1]

// Test 2
console.log(twoSum([3, 2, 4], 6)); // expected [1, 2]

// Test 3
console.log(twoSum([3, 3], 6)); // expected [0, 1]
