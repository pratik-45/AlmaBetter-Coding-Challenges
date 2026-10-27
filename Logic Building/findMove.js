function findMove(s) {
  //store all the possible moves in an array
  const moves = [];

  //check each pair of consecutive characters
  for (let i = 0; i < s.length - 1; i++) {
    //A move is valid only when both characters are "+"

    if (s[i] === "+" && s[i + 1] === "+") {
      //convert the string into an array so we can change the characters
      const arr = s.split("");

      //flip the current pair from "++" to "--"

      arr[i] = "-";
      arr[i + 1] = "-";

      //join the characters and save the resulting string
      moves.push(arr.join(""));
    }
  }
  // Return all possible moves (or [] if none exist)
  return moves;
}

// Export the function for testing
module.exports = { findMove };

// Test cases
console.log(findMove("++++"));
console.log(findMove("++-++"));
console.log(findMove("+-+-"));
