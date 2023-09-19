
const cb = (h, m, a) => {
    let mLetter = a[h];
    let mL2 = m[h];
    document.write(`Middle letter: ${mLetter}, ${mL2}`);
}

const midPos = (msg, callback) => {
    //The length property sets or returns the number of elements in an array.
    let sl = msg.length;
    // math.floor Returns X rounded down to its nearest integer
    let half = Math.floor(sl / 2);
    // split takes a string and split into an array depending on where you tell it to split 
    let sArray = msg.split("")
    callBack(half, msg, sArray);

}
midPos("Frank", cb);