// 1. Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const solution = (nums, target) => {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
};
const result = solution([1, 3, 3, 8], 9);
console.log(result);         //output : [0,3]


// Time Complexity = O(n)
//Space Complexity = O(1)
