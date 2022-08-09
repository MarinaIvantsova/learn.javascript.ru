/* 
Instructions
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.

Notes
The input and output of the gigasecond function is of type Date.

It is possible to return a correct value for this exercise by mutating the solution function argument.
Although there are legitimate use cases for mutating function arguments, this is usually undesirable,
and in the case of this exercise, clearly unexpected. For this reason,
the test suite has a test that fails in case the argument has been modified after the function execution.
*/

const gigasecond = (startDate) => {
    let startTime = startDate.getTime();
    let endDate = new Date(startTime + 1000000000000);
    return endDate;
  };
  
  console.log(gigasecond(new Date("2017-01-26")));
