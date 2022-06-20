/*When people leave the amusement park, their ticket gets revoked.
 If they come back, they need to buy a new one.
  To save regular visitors some time,
   they only need to register once and the visitor information will be kept for subsequent visits.

That means when a visitor leaves the park, 
only their ticket should be invalidated but the rest of the visitor object should stay the same.
Implement the function revokeTicket that accepts a visitor object, 
sets the ticket identifier to null and returns the object afterwards.

const visitor = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

revokeTicket(visitor);
// => { name: 'Verena Nardi', age: 45, ticketId: null } */
const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

function revokeTicket(visitor) {
  let copyVisitor = {...visitor};
  copyVisitor.ticketId = null;
   return copyVisitor;
}

console.log(revokeTicket(visitor));
