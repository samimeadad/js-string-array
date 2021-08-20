const digit = [ 8, 2, 1, 9, 3, 0, 5, 4 ];
const sortedDigit = digit.sort();
console.log( sortedDigit );

const number = [ 63, 89, 23, 5, 34, 9, 77, 8, 99, 55, 12, 1, 33, 10, 32, 3, 7, 6 ];
const sortedNumber = number.sort();
console.log( sortedNumber );

const sortedBigNumber = number.sort( function ( a, b ) {
    return a - b;
} );
console.log( sortedBigNumber );

const friends = [ 'Sami', 'Farmee', 'Arishamma', 'Ammapakhi', 'Meadad', 'Tasnuva', 'Choudhury' ];
const sortedName = friends.sort();
console.log( sortedName );
