const result = require('./Utility')
var readline = require('readline');
console.log("Welcome to user validation Program")
var input = readline.createInterface(process.stdin, process.stdout);
var i = 0;

input.question("1.First_Name   2.Last_Name  3.Email  4.PhoneNo  5.Password_Rule1   6.Password_Rule2  7. Password_Rule3\n", function (option) {

    switch (option) {
        case "1":
            input.question("Enter First Name: \n", function (firstName) {
                result.validateFirstName(firstName);
                process.exit();
            })
            break;

        case "2":
            input.question("Enter Last Name: \n", function (lastName) {
                result.validateFirstName(lastName);
                process.exit();
            })
            break;

        case "3":
            input.question("Enter Your Email: \n", function (Email) {
                result.validateEmail(Email);
                process.exit();
            })
            break;

        case "4":
            input.question("Enter Your Phone Number: \n", function (phoneNo) {
                result.validatePhoneNo(phoneNo);
                process.exit();
            })
            break;

        case "5":
            input.question("Enter password with min 8 char : \n", function (password) {
                result.validatePasswordRule1(password);
                process.exit();
            })
            break;

        case "6":
            input.question("Enter password starting with uppercase : \n", function (password) {
                result.validatePasswordRule2(password);
                process.exit();
            })
            break;

        case "7":
            input.question("Enter password with atleast one numeric value : \n", function (password) {
                result.validatePasswordRule3(password);
                process.exit();
            })
            break;
    }
})






