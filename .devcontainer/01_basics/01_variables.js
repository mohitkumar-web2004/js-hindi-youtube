const accountId = 7761
let accountEmail = "mohit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

// accountId = 2 // not allowed

accountEmail = "ms@ms.com"
accountPassword = "123456789"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])