const number = [ 4, 2, 6, 1, 7, 9, 5, 8, 12, 10, 19, 16, 13, 15 ];
const numberSliced = number.slice( 3, 10 );
console.log( numberSliced );

console.log( number );
const numberSpliced = number.splice( 4, 3 );
console.log( numberSpliced );
console.log( number );