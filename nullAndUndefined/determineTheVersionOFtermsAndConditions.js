/*Due to new legal requirements, newly created visitor objects now also contain detailed information
 on the "General Terms & Conditions" (GTC) that the user agreed to.
  You can see an example of the new visitor object below.

The cashiers of the amusement park now need to check whether a visitor needs to sign a new version of the GTC.
 For this, implement a function gtcVersion that accepts a visitor object as an argument and returns the GTC version
  if it is available.
  If the version information is not available, nothing should be returned.

const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

gtcVersion(visitorNew);
// => '2.1'

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

gtcVersion(visitorOld);
// => undefined */

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };
  
  
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
  
  function gtcVersion(visitor){
    return visitor.gtc?.version;
  }
  console.log(gtcVersion(visitorOld));