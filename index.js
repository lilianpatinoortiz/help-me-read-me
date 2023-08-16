// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "moduleName",
    message: "What is this projects module?",
  },
  {
    type: "input",
    name: "projectMotivation",
    message: "What motivated you to make this project?",
  },
  {
    type: "input",
    name: "projectWhy",
    message: "Why do yoiu think this project is useful?",
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
    type: "input",
    name: "license",
    message: "License?",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("readme_files/" + fileName + ".md", data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your Readme file!")
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile(answers.projectName, readmeContent);
  });
}

// Function call to initialize app
init();
