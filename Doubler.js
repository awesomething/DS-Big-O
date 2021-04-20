// What is the Big O of the following algorithm? Explain your answer


function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;                          // equal to itself times 2
    }
    return array;
}


// O(n) 
// when array list gets longer, the time to solve doubles