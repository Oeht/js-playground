const {sayhello, peter} = require('./names')
const os = require('os')

const user = os.userInfo()
os.cpus().forEach(element => {
    console.log(element.model);
});

console.log(sayhello(peter))