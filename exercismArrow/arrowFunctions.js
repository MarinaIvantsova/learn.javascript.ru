/*
Check if the grocer's service is online

The grocer's application programming interface [API] provides a function
 to check if their service is online called checkStatus.
  Use the grocer's function to finish the implementation of your isServiceOnline function.
   The checkStatus function takes a callback function to receive the status from the API.

if the status is 'ONLINE', return true
if the status is 'OFFLINE', return false
isServiceOnline();
// => true or false
*/
let storeStatus = 'OFFLINE';

function setStatus(status) {
    storeStatus = status;
  }

function checkStatus(callback) {
    return callback(storeStatus);
}

function isServiceOnline() {
    const callback = (x) => {
      if(x === "ONLINE"){
        return true
      } 
      return false
    }
    return checkStatus(callback);
}

setStatus('ONLINE')
console.log(isServiceOnline())
