const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = ({
  projectName,
  moduleName,
  projectMotivation,
  projectWhy,
  projectSolving,
  projectLearning,
  githubProject,
  depoyedProject,
  usageProject,
  projectResources,
  licenses,
}) =>
  `# ${projectName}

  ### ~ ${moduleName}
  
  ## Description
  
    Motivation:
    - ${projectMotivation}

    Why this project was created:
    - ${projectWhy}

    What are we solving:
    - ${projectSolving}

    What we learned:
    - ${projectLearning}
  
  ## Table of Contents   
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  To run the project in your local machine:
  
  1. Open visual studio in your computer or laptop
  2. Clone the git project: ${githubProject}
  3. Pull the latest from the 'main' branch
  4. Locate the index file
  5. Right click on the file and select "Open in default browser"
  6. A new window on your default browser should open with the web page containing the prework study guide
  
  Access the deployed project here: ${depoyedProject}
  
  ## Usage
  
  ${usageProject}
  
  ## Credits
  
  The main resources used:
  
  -   ${projectResources}
  
  ## License
  
  Please refer to the LICENSE in the repo.
  `;

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile("Readme.md", readmeContent, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created your Readme file!")
    );
  });
