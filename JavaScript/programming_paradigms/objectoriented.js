/*
Standard data agnostic paradigm in structuring programs into 'classes' and 'objects' (instances of classes)

Classes hold specific attributes (props), inheritance, polymorphism and methods (as opposed to functions)
State management transforms data within classes (through encapsulation to retain class security of props and methods)
that objects can utilize throughout application data transmission.
Think about application structure and logic simulating real-world objects (ie. customers, shops, products, orders..etc)

*/

class User {
    //Define obj params
    constructor(uName, uPass) {
        this.userName = uName;
        this.password = uPass;
    }

    //Greet helper method
    greet() {
        console.log(`Hi, I am ${this.userName}`)
    }
}

class Validator {

    //Flag global variables
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH'

    //Method returns boolean val for checking validation rules
    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) return value.trim().length > 0;
        if (flag === this.MIN_LENGTH) return value.trim().length > validatorValue;
    }
}


class UserInputForm {

    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signUpHandler)
    }

    //Method that validates event firing into constructor when form is instantiated
    //Used arrow function therefore don't have to bind to refer to the signuphandler method using
    //keyword 'this'
    signUpHandler = (event) => {
        event.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;

        /*Validates against flags in Validator class (static method 'validate' therefore doesn't require
        object instantiaton)*/
        if (!Validator.validate(enteredUserName, Validator.REQUIRED)
            || !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
            alert('Username or password inputs incorrect - try again')
            return;
        }

        const newUser = new User(enteredUserName, enteredPassword);
        console.log(newUser);
        newUser.greet();
    }
}


new UserInputForm();
