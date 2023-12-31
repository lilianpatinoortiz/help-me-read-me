// Packages needed for this application
const licensesData = require("./utils/licenses.json");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
    default: "README",
  },
  {
    type: "input",
    name: "moduleName",
    message: "What is this projects module?",
    default: "Module 09 - Node.js Challenge: Professional README Generator",
  },
  {
    type: "input",
    name: "projectMotivation",
    message: "What motivated you to make this project?",
  },
  {
    type: "input",
    name: "projectWhy",
    message: "Why do you think this project is useful?",
  },
  {
    type: "input",
    name: "projectSolving",
    message: "What is your project trying to solve?",
  },
  {
    type: "input",
    name: "projectLearning",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "githubProject",
    message: "Please provide your github project link:",
  },
  {
    type: "input",
    name: "depoyedProject",
    message: "Please provide your deployed project link:",
  },
  {
    type: "input",
    name: "usageProject",
    message: "How to use your project?",
  },
  {
    type: "input",
    name: "projectResources",
    message: "What resources did you use?",
  },
  {
    type: "list",
    name: "license",
    message: "Select your license from the options:",
    choices: licensesData.licenses.map((license) => license.name), // create array of license names
    validate(answer) {
      const licensesArray = licensesData.licenses.map(
        (license) => license.name
      );
      if (!licensesArray.includes(answer)) {
        return "License not valid!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("readme_files/" + fileName + ".md", data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your Readme file!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile(answers.projectName, readmeContent);
  });
}

// Function call to initialize app
init();
