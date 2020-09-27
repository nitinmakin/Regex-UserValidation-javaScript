const result = require('./Utility')
var readline = require('readline');
console.log("Welcome to user validation Program")
var input = readline.createInterface(process.stdin, process.stdout);
var i = 0;

input.question("1.First_Name   2.Last_Name : ", function (option) {

    switch (option) {     
        case "1":
            input.question("Enter First Name: ", function (firstName) {
                result.validateFirstName(firstName);
                process.exit();
            })
            break;

        case "2":
            input.question("Enter Last Name: ", function (lastName) {
                result.validateFirstName(lastName);
                process.exit();
            })
            break;

    }


})






