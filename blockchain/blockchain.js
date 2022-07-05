const crypto = require('crypto');
let hashprefix = "00000";

//first block
let block = 1
let number = 1;
let previous = "0000000000000000000000000000000000000000000000000000000000000000"
let text = "das ist ein test"


let hash = crypto.createHash('sha256').update(block + number + previous + text).digest('hex');
console.log(new Date().toISOString());
while (hash.substring(0, hashprefix.length) != hashprefix) {
    number++;
    //console.log(number);
    hash = crypto.createHash('sha256').update(number + previous + text).digest('hex');
}

console.log(number + " " + hash);


//second block
block = 2
number = 1;
previous = hash
hash = ""
text = "das ist noch einmal ein test"
console.log(new Date().toISOString());
while (hash.substring(0, hashprefix.length) != hashprefix) {
    number++;
    //console.log(number);
    hash = crypto.createHash('sha256').update(number + previous + text).digest('hex');
}

console.log(number + " " + hash);
console.log(new Date().toISOString());