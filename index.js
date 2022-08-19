// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const utils = require('utils');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

//  Required functions Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: "What's the name of this project? (required)",
    validate: input => {
        if(input){
            return true;
        }else;{
            console.log('Please input the title.');
            return false;
        }
    }
},
{
    type:"input",
    name: "description",
    message: "Input description (required):",
    validate: input => {
        if(input){
            return true;
        }else;{
            console.log('Please input a description.');
        }return false;
    }
},
];
{
    type: "input",
    name: "installation",
    message: "Please input valid application install instructions"
},

{   type: "Options",
    name:  "license",
    message: "Please review and choose read.me license options",
    Choices: [
        "Academic Free License v3.0",
        "LaTeX Project Public License v1.3c",
        "Microsoft Public License",
        "MIT",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "PostgreSQL License",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "zLib License"
    ],
},
{
    type: "input",
    name: "username",
    message: "Please input a valid GitHub username? (required)",
    validate: GhInput => {
        if(ghInput){
            return true;
        }else{
            console.log('Please input a valid Github username.')
        }return false;
    }
},
{    type: "input",
    name:"contributions",
    message: "Please enter read.me contributing guidelines"
},
{
    type: "input",
    name: "test",
    message: "Please input read.me testing instructions here"
},
{
    type: "input",
    name: "usage",
    message: "Please input read.me usage"
},
{
    type:"input",
    name:"email",
    message: "Please input a valid email. (required)",
    validate: input => {
        if(input){return true;}
        else{console.log('Please enter a valid email.')
    return false;}
    }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.catch(err=> console.log(err));
.then(pageMD=> writeToFile (pageMD));
.then(writeToFileResponse=> {console.log(writeToFileResponse.message); })
