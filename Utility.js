class UserValidation {

    validateFirstName = (input) => {
        let firstName = /^[A-Z]{1}([a-z]{2,15})$/.test(input)
        console.log(firstName);
    }

    validateLastName = (input) => {
        let firstName = /^[A-Z]{1}([a-z]{2,15})$/.test(input)
        console.log(firstName);
    }

    validateEmail = (input) => {
        let eMail = /^[a-zA-Z]+[a-zA-Z0-9]*[._+-]?[a-zA-Z0-9]*@[A-Za-z0-9]+([.][a-zA-Z]{2,})$/.test(input)
        console.log(eMail);
    }

    validatePhoneNo = (input) => {
        let phoneNo = /^[0|+91]{1,}[-][6-9]{1,}?[0-9]{9}$/.test(input)
        console.log(phoneNo);
    }

    validatePasswordRule1 = (input) => {
        let password = /[A-Za-z]{8,25}/.test(input)
        console.log(password);
    }

    validatePasswordRule2 = (input) => {
        let password = /[A-Z]{1,}[a-z]{8,}/.test(input)
        console.log(password);
    }

    validatePasswordRule3 = (input) => {
        let password = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(.{8,25})$/.test(input)
        console.log(password);
    }

    validatePasswordRule4 = (input) => {
        let password = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@|!]{1})(.{8,25})$/.test(input)
        console.log(password);
    }
}
module.exports = new UserValidation();
