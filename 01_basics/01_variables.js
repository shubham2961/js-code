const accountId=1234
let accountEmail = "abc@123gmail.com"
var accountPass = "1111"
 accountCity ="pune" 

 //accountId = 2 //not allowed
 accountEmail = "hs@hs.com"
 accountPass = "2222"
 accountCity = "goa"
 
 /*
 prefer not to use var
 because of issu in block  scope of and functional scope
 
 */
 console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity]);
 