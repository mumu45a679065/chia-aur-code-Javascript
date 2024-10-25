const accountId = 144553
let accountEmail = 'hitesh@google.com'
var accountPasswaord = '1234'
accountCity = 'Jaipur'
let accountState;

// accountId = 2 // not allowed

accountEmail = 'google@gmail.com'
accountPasswaord = '456'
accountCity = 'jai' // possiblity variable can be decalred in such way(not prefered)
console.log(accountId);

/* 
Prefer not to use var
because of issue in block and funtional scope
*/

console.table([accountEmail, accountPasswaord, accountCity, accountState])
