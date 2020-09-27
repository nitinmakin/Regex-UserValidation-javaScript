class UserValidation {

    validateFirstName = (Name) => {
        let firstName = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(firstName);
    }

    validateLastName = (Name) => {
        let firstName = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(firstName);
    }

    validateEmail = (Email) => {
        let eMail = /^[a-zA-Z]+[a-zA-Z0-9]*[._+-]?[a-zA-Z0-9]*@[A-Za-z0-9]+([.][a-zA-Z]{2,})$/.test(Email)
        console.log(eMail);
    }
}
module.exports = new UserValidation();
