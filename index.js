// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("This is a README.md generator. Please answer the following questions to create your README.md.")
// TODO: Create an array of questions for user input
const questions = [
    // Project Name: 
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: user_input => {
            if (user_input) {
                return true;
            } else {
                console.log('You must enter a title for your project to contiue.');
                return false;
            }
        }
    },
    // Project Description:
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project. Include what it does and why it should be used.',
        validate: user_description => {
            if (user_description) {
                return true;
            } else {
                console.log('You must enter a description for your project to contiue.');
                return false;
            }
        }
    },
    // Table of Contents:
    {
        type: 'input',
        name: 'table of contents',
        message: 'Enter your table of contents. Include your desciption, installation, usage, license, contributing, tests, and questions. All will be included in your README.md',
        validate: user_tableofcontents => {
            if (user_tableofcontents) {
                return true;
            } else {
                console.log('You must enter a description for your project to contiue.');
                return false;
            }
        }
    },
    // Installation:
    {
        type: 'input',
        name: 'installation',
        message: 'Does your project require the user to install any special software or configurations to use this project? If so, please list what that is and how to install.',
        validate: user_installation => {
            if (user_installation) {
                return true;
            } else {
                console.log("You can mention that your project doesn't require further installation if applicable.");
                return false;
            }
        }
    },
    // Usage:
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use this project and what your project does.',
        validate: user_tableofcontents => {
            if (user_tableofcontents) {
                return true;
            } else {
                console.log('You must enter how to use this project to contiue.');
                return false;
            }
        }
    },
    // License:
    {
        type: 'checkbox',
        name: 'license',
        message: 'Pick which license that you would like to use for your project.',
        choices: ['MIT', 'apache', 'GPLv3', 'GPLv2', 'other'],
        validate: user_license => {
            if (user_license) {
                return true;
            } else {
                console.log("You must choose a license, if your license isn't represented, then choose 'other'.");
                return false;
            }
        }
    },
    // Contibutions:
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how to others can contribute to your project.',
        validate: user_contributing => {
            if (user_contributing) {
                return true;
            } else {
                console.log('You must describe how the user can contribute to your project.');
                return false;
            }
        }

    },
    // Tests:
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your project out?',
        validate: user_test => {
            if (user_test) {
                return true;
            } else {
                console.log('Describe how to test this project to continue.');
                return false;
            }
        }
    },
    // Questions: 
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
        validate: user_github => {
            if (user_github) {
                return true;
            } else {
                console.log('You must enter your Github username to contiue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email so that the user can ask any questions they may have.',
        validate: user_email => {
            if (user_email) {
                return true;
            } else {
                console.log('You must enter your email to contiue.');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        };
        console.log('README.md successfully created!');
    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
