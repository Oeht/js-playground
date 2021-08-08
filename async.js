const resolveAfter2Seconds = () => {

  console.log('2');

  return new Promise(resolve => {
    resolve('4');
    console.log("3");
  });

}


const asyncCall = async () => {

  console.log('1');

  const result = await resolveAfter2Seconds();
  console.log(result);

  console.log('5');
}

asyncCall();