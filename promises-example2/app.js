async function goChuck() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    const results = await response.json();

    return results;
}

goChuck().then((data) => {
    console.log(data);
    let chuckMsg = document.createElement("p");
    chuckMsg.innerHTML = data.value;
    document.getElementsByTagName('body')[0].appendChild

}).catch((error) => {
    console.log("there was an error")
})

