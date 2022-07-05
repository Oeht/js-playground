module.exports.resolveAfter2Seconds = () => {

    console.log('2');
  
    return new Promise(resolve => {
      resolve('4');
      console.log("3");
    });
  
}

module.exports.dateiname = "testdatei.txt"