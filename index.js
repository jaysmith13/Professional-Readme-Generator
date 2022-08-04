// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: "What's the name of this project? (required)",
    validate: input => {
        if(input){
            return true;
        }else;{
            console.log('Please enter the title.');
            return false;
        }
    }
},
{
    type:"input",
    name: "description",
    message: "Enter description (required):",
    validate: input => {
        if(input){
            return true;
        }else;{
            console.log('Please input a description.');
        }return false;
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();