// What is the Big O of the following algorithm? Explain your answer


function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(15))


// O(1)
// There is only one constant being run