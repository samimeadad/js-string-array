/* //split()
const kalima = "La Ilaha Illallah Muhammadur Rasulullah";
const words = kalima.split( ' ' );
// console.log( words );

const anthem = "Amar Sonar Bangla Ami Toamai Valobashi";
const text = anthem.split( 'a' );
// console.log( text ); */

/* //slice()
const anthem = "Amar Sonar Bangla Ami Toamai Valobashi";
const smallSlice = anthem.slice( 5, 13 );
for ( const letter of smallSlice ) {
    console.log( letter, anthem.indexOf( letter ) );
} */

/* //substr()
const anthem = "Amar Sonar Bangla Ami Toamai Valobashi";
const smallSlice = anthem.substr( 5, 5 );
console.log( smallSlice ); */

//concat()
let first = 'Amader';
let last = 'City';
// first = first + last;
last = first.concat( last ).concat( 'Dhaka' );
console.log( last );