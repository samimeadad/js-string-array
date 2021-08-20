const products = [
    'Dell hardcore i29 200GB laptop',
    'iPhone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'Dell supernova laptop',
    'HTC low price phone',
    'dell color phone with Laptop'
];

const searching = 'dell';

//Searching with indexOf() method
const output = [];
for ( const product of products ) {
    if ( product.toLowerCase().indexOf( searching.toLowerCase() ) != -1 ) {
        // output.push( product );
    }
}
// console.log( output );


//Searching with includes() method
for ( const product of products ) {
    if ( product.toLowerCase().includes( searching.toLowerCase() ) ) {
        // output.push( product );
    }
}
// console.log( output );


//Searchign with startsWith() method
for ( const product of products ) {
    if ( product.toLowerCase().startsWith( searching.toLowerCase() ) ) {
        output.push( product );
    }
}
console.log( output );