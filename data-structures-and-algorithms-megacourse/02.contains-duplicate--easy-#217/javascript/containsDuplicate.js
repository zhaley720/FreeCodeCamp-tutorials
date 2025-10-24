/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
};

// Test 1
console.log(containsDuplicate([1, 2, 3, 1])); // expected true

// Test 2
console.log(containsDuplicate([1, 2, 3, 4])); // expected false

// Test 3
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // expected true

