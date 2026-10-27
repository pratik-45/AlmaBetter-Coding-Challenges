function signOfProduct(nums) {
    let negativeCount = 0;

    for (let i=0; i < nums.length; i++) {
        if (nums[i] ===0) {
            return 0;
        }

        if (nums[i] < 0) {
            negativeCount++;
        }
    }

    if (negativeCount % 2 !== 0) {
        return -1;
    } 

    return 1;
}

module.exports = { signOfProduct };


console.log(signOfProduct([2, -3, 5, 4]));
console.log(signOfProduct([1, 2, 0]));
console.log(signOfProduct([-2, -3, 4]));