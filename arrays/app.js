/// For Each array example
let arr = [1, 2, 3];
arr.forEach(function (value) {
    console.log("For each value:" + value)
})

function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (value) {
        newArr.push(value * 2)
    })
    return newArr;
}

console.log("Double values:",
    doubleValues(arr));

//Every: only boolean values
var eArr = [-1, -2, -3,];
var everyFn1 = eArr.every(function (value) {
    return value < 0
})

console.log("Every function 1:", everyFn1);

var everyFn2 = eArr.every(function (value) {
    return value > -2
})

console.log("Every function 2:", everyFn2);

//Check to see if the characters are all lowercase
function allLowerCase(str) {
    return str.split("").every(function (value) {
        return value == value.toLowerCase();
    })
}
console.log("All Lowercase 1:", allLowerCase("this is a sentence"));


//check to see if all array values are arrays
function allArrays(arr) {
    return arr.every(Array.isArray);
}
console.log("All Arrays: 1 ", allArrays([[1, 2], ['Dog'], ['Cat'], [3], [true]]));
console.log("All Arrays: 2 ", allArrays([[1, 2], ['Dog'], ['Cat'], [3], true]));

//Some: only boolean values
var sArr = [10, 20, 30];
var someFn1 = sArr.some(function (value) {
    return value < 20;
})
var someFn2 = sArr.some(function (value) {
    return value < 5;
})
console.log("Some Method: ", someFn1);
console.log("Some Method: ", someFn2);

function hasEvenNum(arr) {
    return arr.some(function (value) {
        return value % 2
    })
}

console.log("Has Even Number: ", hasEvenNum([1, 2, 3, 4, 5]));
console.log("Has Even Number 2: ", hasEvenNum([11, 21, 33, 41, 15]));

    //Filter

    //Map

