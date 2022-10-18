// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilsgenerateMarkdown.js'); 
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
                console.log('You must enter how to use this project  to contiue.');
                return false;
            }
        }
    },
    // License:
    {
        type: 'checkbox', 
        name: 'license',
        message: 'Pick which license that you would like to use for your project.',
        choices:
            }
        }
    },
    // Contibutions:
    {

    },
    // Tests:
    {

    },
    // Questions: 
    {

    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
