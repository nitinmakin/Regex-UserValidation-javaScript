const result = require('./Utility')
var readline = require('readline');
console.log("Welcome to user validation Program")
var input = readline.createInterface(process.stdin, process.stdout);
input.question("1.First Name  2.Last Name", function (option) {

    switch (option) {
        case "1":
            input.question("Enter First Name: ", function (firstName) {
                result.validateFirstName(firstName);
                process.exit();
                      })
                      break;
        }
    
})





