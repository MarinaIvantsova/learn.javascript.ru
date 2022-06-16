/*After a while, you get feedback from the employees that
 they want the ticket status to be easier to understand at the first glance.
  They only want to see either the name of the visitor or that the ticket is invalid.

Write a function simpleTicketStatus that accepts the same arguments as ticketStatus in task 3.
 This function only returns one of two different results.

the name of the visitor if the ticket was sold
'invalid ticket !!!' if the ticket was not sold yet or the identifier was not found in the tracking object
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

simpleTicketStatus(tickets, '23LA9T41');
// => 'Verena Nardi'

simpleTicketStatus(tickets, '0H2AZ123');
// => 'invalid ticket !!!'

simpleTicketStatus(tickets, 'RE90VAW7');
// => 'invalid ticket !!!'*/
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };
  
function simpleTicketStatus(tickets, ticketId) {
    return tickets[ticketId] ?? 'invalid ticket !!!';
}

console.log(simpleTicketStatus(tickets, '23LA9T41'));
