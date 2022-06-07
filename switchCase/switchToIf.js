// Напишите "if", аналогичный "switch"
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':'Opera'
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// let browser = 'Opera';

// if (browser === 'Edge') {
//     console.log("You've got the Edge!")
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//     console.log('Okay we support these browsers too');
// } else {
//     console.log('We hope that this page looks ok!')
// }
let browsers = ['Edge', 'Opera'];
if (browsers.includes('Edge')) {
    console.log("You've got the Edge!")
}
    if (browsers.includes('Chrome')
    || browsers.includes('Firefox')
    || browsers.includes('Safari')
    || browsers.includes('Opera')) {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}