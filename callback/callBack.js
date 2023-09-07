// working the DOM
//return one element: querySelector
document.querySelector('div ul li:first-child').innerHTML = 'querySelector';

document.querySelector('.my').innerHTML = 'querySelector p';

//grab a list
//getelementbyid('my');

document.getElementsByClassName('my')[1].innerHTML = "class name";
document.getElementsByTagName('li')[1].innerHTML = "second list item";
document.querySelectorAll('body>ul li')[0].innerHTML = "querySelectorAll";

//single values
// getElementById
//querySelector

//Lists:
//getElementsByClassName
//getElementbyTagName
//querySelectorAll

function callBack() {

    console.log("this is a callback function");
}

//callback function is a higher order function as a parameter

function higherOrder(newFN) {
    console.log("before callback");
    newFN();
    console.log("after calling function")
}

higherOrder(callBack);

function firstFunction(msg) {
    alert(msg);
}

function middleFunction(msg) {
    console.log(msg);
}

function lastFunction(msg) {
    return confirm(msg);
}

firstFunction("My Message");
middleFunction("My Message");
lastFunction("My Message");

const startFunction = (msg, mFn) => {
    //function startFunction(msg, mFn){}
    alert(msg);
    mFn(msg, endFunction);

}

const nextFunction = (msg, eFn) => {
    console.log(msg);
    eFn(msg);
}

const endFunction = (msg) => {
    return confirm(msg);
}

//const endFunction=(msg)=>confirm(msg);

//function endFunction(msg){
//return confirm(msg);
//}

startFunction('Callback message...', nextFunction)

const costTable = (subT, tip, total) => {
    let createTable = `<ul><li>Subtotal: ${subT}</li><li>Tip: ${tip}</li><li>total: ${total}</li></ul>`;
    document.write(createTable);
}

const calcTotal = (subTotal, tip, callback, taxRate = 0.07) => {
    let total = subT + (subT * taxRate) + tip;
    total = total.toFixed(2);
    // let dinner [subT, tip,total];

    callback(subT, tip, total);
}

calcTotal(34.95, 10.50, costTable);
