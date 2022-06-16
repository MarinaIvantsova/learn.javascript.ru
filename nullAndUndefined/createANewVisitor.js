/*Create a new visitor

When visitors come to the amusement park for the first time, 
they need to register by entering their name and age in a terminal and agreeing to the terms and conditions.
Of course, they also need to buy a ticket. Each ticket has an identifier like H32AZ123.

Write a function createVisitor that accepts three arguments.

The name of the visitor.
The age of the visitor.
The identifier of the ticket that the visitor bought.
The function should return an object that holds this information. 
The keys in the object should be called name, age and ticketId.

createVisitor('Verena Nardi', 45, 'H32AZ123');
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' } */

function createVisitor(name, age, ticketId) {
return {
    name,
    age,
    ticketId,
}
}
console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'))