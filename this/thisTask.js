"use strict";
//1. What is the value of the keyword this in the following example:
let data = this;
console.log(data); // window

//2. What does this function output? Why?
function logThis(){
    return this;
}

console.log(logThis()); // undefined

//3. What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

console.log(instructor.sayHi()) // Hello! Tim

// 4. What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

console.log(instructor.displayInfo()) // Cat owner? undefined

// 5. What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

console.log(instructor.info.displayLocation()) // Oakland

// 6. What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

console.log(instructor.info.data.logLocation()) // Why might we be getting an error here?
 //Потому что logLocation - не является методом
 