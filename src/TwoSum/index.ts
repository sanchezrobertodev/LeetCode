// problem src: https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {            
            if((nums[i] + nums[j] === target) && (i !== j)){
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([3,2,4], 6)); // [0,1]
