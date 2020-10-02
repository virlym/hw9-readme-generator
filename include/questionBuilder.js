// a function that defines the questions for inquirer
// takes in no variables, returns a string of objects that inquirer can use for prompt
// required variables for the markdown : userNameAns, fullNameAns, projectNameAns, licenseAns, emailAns, descriptionAns
function questionBuilder() {
    questionArray = [
        {
            type: "input",
            message: "What is your username?",
            name: "userNameAns",
            default: "User"
        },
        {
            type: "input",
            message: "What is your full name?",
            name: "fullNameAns",
            default: "Full Name"
        },
        {
            type: "input",
            message: "What is the name of the project?",
            name: "projectNameAns",
            default: "New-Project"
        },
        {
            type: "list",
            message: "Which license are you using?",
            name: "licenseAns",
            default: "MIT",
            choices: ["MIT", "GNU"]
        },
        {
            type: "input",
            message: "What is your email?",
            name: "emailAns",
            default: "User@gmail.com"
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "descriptionAns",
            default: "Description TBD"
        },
    ];
    return questionArray;
}

module.exports = {
    questionBuilder : questionBuilder
}