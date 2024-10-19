const figlet = require('figlet');

figlet('Hello, the execise has been completed!', function(err, data) {
if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
}
console.log(data);
});