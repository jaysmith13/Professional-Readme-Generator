// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const utils = require('utils');
const writeToFile = require('./utils/generateMarkdown.js');
const { type } = require('os');
//  Required functions Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    name: 'title',
    message: "What's the name of this project? (required)",
    validate: input => {
        if(input){
            return true;
        }else{
            console.log('Please input the title.');
            return false;
        }
    }
},

{
    type:'input',
    name: 'description',
    message: "Input description (required):",
    validate: input => {
        if(input){
            return true;
        }else{
            console.log('Please input a description.');
        }return false;
    }
},

{
    type: 'input',
    name: 'installation',
    message: 'Please input valid application install directions (required)',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('Please input valid install directions');
            return false;
        }
    }
},

{   type: 'Options',
    name:  'license',
    message: 'Please review and choose read.me license options',
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
    type: 'input',
    name: 'username',
    message: 'Please input a valid GitHub username? (required)',
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
    message: "Please enter read.me contributing guidelines",
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },

{
    type: "input",
    name: "test",
    message: "Please input read.me testing instructions here",
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Please enter your use test instructions!');
            return false;
        }
    }
},
{
    type: "input",
    name: "usage",
    message: "Please input read.me usage. (required)",
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Input read.me usage');
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Please input a valid email. (required)",
    validate: Input => {
        if(Input){return true;}
        else{console.log('Please enter a valid email.');
    return false;}
    }
},
]
// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Congrats! File was successfully created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
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
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})