const result = require('./Utility')
var readline = require('readline');
console.log("Welcome to user validation Program")
var input = readline.createInterface(process.stdin, process.stdout);
var i = 0;

input.question("1.First_Name   2.Last_Name  3.Email : ", function (option) {

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

        case "3":
            input.question("Enter Your Email: ", function (Email) {
                result.validateEmail(Email);
                process.exit();
            })
            break;

    }


})






