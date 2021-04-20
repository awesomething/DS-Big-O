// What is the Big O of the following algorithm? Explain your answer


function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// O(1)
// takes an input, no matter the size, takes same amount of time to complete
