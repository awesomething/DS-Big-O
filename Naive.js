// What is the Big O of the following algorithm? Explain your answer


function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}


// O(n) 
// look through array and if one matches with the second input the function is done