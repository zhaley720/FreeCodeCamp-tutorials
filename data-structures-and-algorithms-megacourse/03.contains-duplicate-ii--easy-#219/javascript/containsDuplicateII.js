/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) return true;
        mySet.add(nums[i]);
        if (mySet.size > k) {
            mySet.delete(nums[i - k]);
        }
    }
    return false;
};

// Test 1
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // expected true

// Test 2
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // expected true

// Test 3
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // expected false

