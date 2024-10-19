const messages = require("./module.js");

const msg = messages.hello();
const PI = messages.PI;
console.log(msg, PI);


// Instead of making variables on line 3 and 4, 
// We could instead have imported as
// const { hello, PI } = require("./module.js");