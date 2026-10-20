function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}

console.log(removeDuplicates([2, 2, 3, 4, 5, 6, 6]));
