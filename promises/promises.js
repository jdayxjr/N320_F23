// 3 states: pending, fullfiled, rejected
let basicPromise = new Promise(function (resolve, rejected) {
    let x = 12;
    if (x == 10) {
        resolve();
    } else {
        rejected();
    }
})
basicPromise.then(function () {
    document.write("Basic Promise Resolved");
}, function () {
    document.write("Basic promise is rejected");
});


// Another basic function using catch
const cPromise = new Promise(function (resolve, reject) {
    let newNum = Math.random();
    if (newNum < 0.5) {
        resolve(newNum);
    } else {
        reject(newNum);
    }
})

cPromise.then(function (num) {//resolved
    console.log("Promise Resolved: ", num);
}).catch(function (num) { //rejected
    console.log("Promise rejected: ", num);
})

//a promise with a set timeout
const rNumPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let randNum = Math.floor(Math.random() * 10) + 1;
        resolve(randNum);
    })
})

rNumPromise.then(function (data) {
    console.log("setTimeout Promise Resolved: ", data);
})
console.log("setTimeout Inittiated");


//promise chaining
const promiseChain = new Promise(function (resolve, reject) {
    resolve(5);
});

promiseChain.then(function (data) {
    return data * 2;
}).then(function (data) {
    return data + 20;
}).then(function (data) {
    console.log(data);
})


//Data from external source using fetch 
const fetchPromise = fetch("https:///mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log("Fetched Promised: ".fetchPromise);
fetchPromise.then(function (response) {
    const jPromise = response.json();
    jPromise.then(function (data) {
        console.log("Data Recieved: " + data[2].name);
    })
})