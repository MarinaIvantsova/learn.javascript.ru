/*To prevent forgery, the ticket identifiers are unique. 
Once a ticket is printed, its identifier is added as a key in an object in the system so it can be tracked.

Before the ticket is sold to a visitor, 
it is stored with the value null in the ticket tracking object. When it is sold to a visitor,
 the visitor's name is assigned as a value. When employees have doubts about the validity of a ticket,
  they need to check the status of the ticket in the system.

Implement a function ticketStatus that accepts the tracking object and a ticket identifier as arguments. 
It should return one of the following results.

- 'unknown ticket id' if the identifier was not found in the tracking object
- 'not sold' in case the ticket was printed but not sold
- 'sold to {name}' where {name} is the name of the visitor if the ticket was sold
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

ticketStatus(tickets, 'RE90VAW7');
// => 'unknown ticket id'

ticketStatus(tickets, '0H2AZ123');
// => 'not sold'

ticketStatus(tickets, '23LA9T41');
// => 'sold to Verena Nardi' */

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined) {
        return 'unknown ticket id';
    } if (tickets[ticketId] === null) {
        return 'not sold'
    }

    return `sold to ${tickets[ticketId]}`

}
console.log(ticketStatus(tickets, 'bfg'));