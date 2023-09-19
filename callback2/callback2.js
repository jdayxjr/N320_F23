//SetTimeout example 
setTimeout(function () {
    console.log("Time is up!");
}, 2000);

function callBack() {
    console.log("Callback function");
}

setTimeout(callBack, 1000);

//setInterval example 
function cb() {
    console.log("callBack is called continously");
}
setInterval(cb, 3000);

var num = 0;
var intervalID = setInterval(function () {
    num++;
    console.log(`Current Number: ${num}`);
    if (num === 5)
        console.log(intervalID);
    clearInterval(intervalID);
}, 1000);

// For Loop Example:
var arr = [1, 2, 3, 4, 5];

function forLoopArray(arr) {
    for (var count = 0; count < arr.length; count++) {
        console.log(arr[count] * 2);
    }
}
//For Each Loop Example:
forLoopArray(arr)
//ForEach function parameters: item, index, array
arr.forEach(function (number) {
    console.log(number * 2);
});

var instruments = ['drums', 'guitar', 'keyboard'];
//drums guitar keyobard!!
var results = [];
instruments.forEach(function (item, index, arr) {
    if (arr.length - 1 !== index) {
        results += item + " ";
    } else {
        results += item + "!!";
    }
})

console.log(results);