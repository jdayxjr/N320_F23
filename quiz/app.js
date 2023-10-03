const finallyFall = (values) => {
    console.log(values);
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month == 9) {
        let mName = "September 23";
        console.log(mName);
    } else {
        console.log("Falling leaves");
    };
};
p1 = new Promise(function (resolve, reject) {
    let pumpkin = "orange";
    console.log("It's almost Fall.");
    if (pumpkin == "white") {
        reject("This is not the pumpkin you are looking for.");
    } else {
        pumpkin += " pumpkin";
        resolve(pumpkin);
    }
});

p2 = Promise.resolve(23);
p3 = Promise.reject("Halloween");

p4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Pumpkin spiced everything."), 1000
    }
    )
});

Promise.any([p1, p2, p3, p4]).then(function (values) {
    finallyFall(values);
}).catch(function (value) {
    console.log(value);
});