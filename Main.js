const result = require('./Utility')
var readline = require('readline');
console.log("Welcome to user validation Program")
var input = readline.createInterface(process.stdin, process.stdout);
var i = 0;

input.question("1.Validate_First_Name   2.Validate_Last_Name  3.Validate_Email  4.Validate_PhoneNo  5.Validate_Password\n", function (option) {

    switch (option) {
        case "1":
            console.log("NOTE: FIRST NAME MUST START WITH UPPERCASE, MUST HAVE 3 CHARS")
            input.question("Enter First Name: \n", function (firstName) {
                result.validateFirstName(firstName);
                process.exit();
            })
            break;

        case "2":
            console.log("NOTE: LAST NAME MUST START WITH UPPERCASE, MUST HAVE 3 CHARS")
            input.question("Enter Last Name: \n", function (lastName) {
                result.validateFirstName(lastName);
                process.exit();
            })
            break;

        case "3":
            console.log("NOTE: START WITH [A-Z][a-z][0-1] MUSTH HAVE @ AND .[A-Z][a-z]")
            input.question("Enter Your Email: \n", function (Email) {
                result.validateEmail(Email);
                process.exit();
            })
            break;

        case "4":
            console.log("NOTE: STARTS WITH 0 OR +91 FOLLOWED BY 10 DIGITS")
            input.question("Enter Your Phone Number: \n", function (phoneNo) {
                result.validatePhoneNo(phoneNo);
                process.exit();
            })
            break;

        case "5":
            console.log("NOTE: PASSWORD MUST BE ATLEAST (8-chars, 1 uppercase ,1 digit and 1 special char)")
            input.question("Enter password: \n", function (password) {
                result.validatePassword(password);
                process.exit();
            })
            break;
    }
})






