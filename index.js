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
        t
    },
    // Table of Contents:
    {

    },
    // Installation:
    {

    },
    // Usage:
    {

    },
    // License:
    {

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
