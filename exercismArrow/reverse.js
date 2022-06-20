/*Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223*/
 const reversed = (value) => {
    return value.toString().split('').reverse().join();
 }
 console.log(reversed(32243))