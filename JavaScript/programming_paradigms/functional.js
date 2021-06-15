/*
Similar but distinct to object-oriented paradigms, functional programming focuses on granularity of operations into
distinct functions -- each functions has one purpose, requires one or more parameters, and transforms data within the function body
therefore returning new data to be passed into another function

Functional Programming holds the advantage of having far more modularity within design patterns as it
makes it predictable easier to path-trace data flow, debug and run automated testing tools within the development cycle (unit, integration)

Used in conjunction with OOP, it holds significant advantages in creating resuable code blocks to be deployed across an applications
codebase
*/

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';


const getUserInput = (inputElementID) => {
    //Can also write validation rule to accept HTML DOM components
    return document.getElementById(inputElementID).value;
}

const createUser = (name, pass) => {
    if (!validate(name, REQUIRED) || !validate(pass, MIN_LENGTH, 5)) {
        throw new Error('Username or password inputs incorrect! - try again');
    }
    //If checks passed -- create new user and return the object
    return {
        userName: name,
        password: pass
    }
}

//Function reuses modular code from OOP example
const validate = (value, flag, validatorValue) => {
    if (flag === REQUIRED) return value.trim().length > 0;
    if (flag === MIN_LENGTH) return value.trim().length > validatorValue;
}


const signupHandler = (event) => {
    event.preventDefault(); //prevents sending form to server that triggers page refresh

    //Get user Inputs
    const enteredUserName = getUserInput('username');
    const enteredPassword = getUserInput('password');

    //Implement try catch as the createUser func, throws native Error that must be handled in runtime
    try {
        const newUser = createUser(enteredUserName, enteredPassword);
        console.log(newUser); //Show output on web console
        greetUser(newUser); //Call function to greet user
    } catch (err) {
        alert(err.message);
    }
}

const greetUser = (user) => {
    console.log(`Hi, I am ${user.userName}`);
}


const connectForm = (formID, formSubmitHandler) => {
    const form = document.getElementById(formID);
    form.addEventListener('submit', formSubmitHandler);
}

//Point of entry for application
connectForm('user-input', signupHandler);