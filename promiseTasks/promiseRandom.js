let myPromise = new Promise(function (resolve, reject) {
  let data = [2, 4, 6, 7];
  let randomNumber = Math.ceil(Math.random() * 5);
  if (data[randomNumber]) {
    resolve(data[randomNumber]);
  } else {
    reject("Error occured");
  }
});

myPromise.then(function(e) {
    console.log(e);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log('Promised completed')
})
