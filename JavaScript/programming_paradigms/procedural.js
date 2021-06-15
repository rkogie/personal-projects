/*
Organization of application logic as a series of sequential steps/execution tasks from top to bottom

Program executes step after step
*/


//Get user inputs
const form = document.getElementById('user-input');


//Functions are permitted in procedural
function signUpHandler(event) {
    //prevents sending form to server that triggers page refresh
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const enteredUserName = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;
    const PASSWORD_LENGTH = 5;

    //Trim whitespace and check for valid inputs
    if (enteredUserName.trim().length === 0) {
        alert('Invalid input - username required!')
        return;
    }
    if (enteredPassword.trim().length <= PASSWORD_LENGTH) {
        alert(`Invalid password - password must be greater than ${PASSWORD_LENGTH} characters`);
        return;
    }


    //Store data into an object (also acceptable within procedural paradigms)
    const user = {
        userName: enteredUserName,
        password: enteredPassword
    };

    //Display output
    console.log(user);
    console.log(`Hi, I am ${user.userName}`)
}

//Listens for button prompt from HTML DOM- button
form.addEventListener('submit', signUpHandler);