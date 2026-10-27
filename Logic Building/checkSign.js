function checkSign(a, b, c) {
    let positiveCount = 0;

    if (a > 0) positiveCount++;
    if (b > 0) positiveCount++;
    if (c > 0) positiveCount++;

    if (positiveCount === 3) {
    return "+++";
    }

    else if (positiveCount === 2) {
    return "++-";
    }

    else if (positiveCount === 1) {
    return "+--";
    }

    else {
    return "---";
    }

}

module.exports = { checkSign };

console.log(checkSign(2, 5, 7));
console.log(checkSign(8, -3, 4));
console.log(checkSign(2, -5, -7));
console.log(checkSign(-2, -5, -7));