const crypto = require('crypto');

//first block
let block = 1
let text = "das ist ein test"
let number = 0;
let previous = "0000000000000000000000000000000000000000000000000000000000000000"


let hash = crypto.createHash('sha256').update(block + number + previous + text).digest('hex');

while (hash.substring(0, 4) != "0000") {
    number++;
    //console.log(number);
    hash = crypto.createHash('sha256').update(number + previous + text).digest('hex');
}

console.log(number + " " + hash);


//second block
block = 2
text = "das ist noch einmal ein test"
number = 0;
previous = hash
hash = ""

while (hash.substring(0, 4) != "0000") {
    number++;
    //console.log(number);
    hash = crypto.createHash('sha256').update(number + previous + text).digest('hex');
}

console.log(number + " " + hash);
