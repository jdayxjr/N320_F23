


async function allThree() {
    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("First Promise");
            resolve("First Fullfilled");

        }, 1000);
    })


    async function allThree() {
        const p2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log("Second Promise");
                resolve("First Fullfilled");

            }, 2000);
        })


        async function allThree() {
            const p3 = new Promise(function (resolve, reject) {
                setTimeout(() => {
                    console.log("Third Promise");
                    resolve("First Fullfilled");

                }, 3000);
            })

            const combinedP = Promise.all([p1, p2, p3]);
            return combinedP;



        }

    }
}

async function returnData() {
    let data = await allThree();
    console.log(data);
}



returnData();