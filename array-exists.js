function megaFriend( friends ) {
    if ( Array.isArray( friends ) == false ) {
        return 'Please provide an array!';
    }
    let mega = friends[ 0 ];
    for ( const friend of friends ) {
        if ( friend.length > mega.length ) {
            mega = friend;
        }
    }
    return mega;
}

const friends = [ 'kutub', 'Lion', 'Shamol', 'Shabbir' ];
const myBigBuddy = megaFriend( friends );
console.log( myBigBuddy );

//Search array with indexOf() method
if ( friends.indexOf( ( 'Fox' ) == -1 ) ) {
    console.log( 'Fox does not Exists' );
}

//Search array with includes() method
if ( friends.includes( 'Lion' ) ) {
    console.log( 'Lion found with includes() method' );
}


//Array concatenation with concat()
const first = [ 5, 8, 2, 6 ];
const last = [ 1, 9, 3, 7 ];
const combined = first.concat( last );
console.log( combined );