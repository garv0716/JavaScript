const accountId = 123243
let accountEmail = "garv@google.com"

var accountPassword = "password"

/*
JS allow to resevre the memory
without using the keywords var, let or const
*/

accountCity = "New York"
let accountState;

/*
Prefer not to use var
because of isssue in block scope and functional scope.
*/

accountEmail = "garv@google.com"
accountPassword = "newpassword"
accountCity = "San Francisco"

console.log(accountId)

// for table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
  