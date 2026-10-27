function shortestDistance(wordsDict, word1, word2) {
    //store the most recent positions of both words
    let index1 = -1;
    let index2 = -1;

    //start with a large distance
    let minDistance = Infinity;

    //visit each word in the array
    for (let i=0; i< wordsDict.length; i++) {

        //update the index of word1 if we find it
        if (wordsDict[i] === word1) {
            index1=i;
        }
        //update the index of word2 if we find it
        if (wordsDict[i] === word2) {
            index2=i;
        }

        //if we have found both words, calculate the distance
        if(index1 !== -1 && index2 !== -1) {
            const distance = Math.abs(index1 - index2);

            //keep the smallest distance found so far
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }   
    
    //return the smallest distance found
    return minDistance;
}

//Export the function for testing

module.exports = { shortestDistance };

// Test cases
const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];

console.log(shortestDistance(wordsDict1, "coding", "makes"));
console.log(shortestDistance(wordsDict2, "apple", "fig"));

