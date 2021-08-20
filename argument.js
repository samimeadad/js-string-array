function addNumbers( num1, num2 ) {
    console.log( arguments );
    let result = 0;
    for ( const item of arguments ) {
        result = result + item;
    }
    return result;
}
const sum = addNumbers( 23, 13, 100, 15 );
console.log( sum );

function getFullName( firstName, lastName ) {
    let fullName = '';
    for ( const item of arguments ) {
        fullName = fullName + ' ' + item;
    }
    return fullName;
}

const name = getFullName( 'Hamzah', 'Bin', 'Sami', 'Meadad', 'Bin', 'Kaysar', 'Bin', 'Abdus', 'Sattar' );
console.log( name );