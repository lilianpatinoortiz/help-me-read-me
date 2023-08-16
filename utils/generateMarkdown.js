// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // example: [![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]
  return license
    ? `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]`
    : ``;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `(https://opensource.org/licenses/Apache-2.0)` : ``;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  return `${licenseBadge}${licenseLink}`;
}

// Create a function to generate markdown for README
function generateMarkdown({
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
  license,
}) {
  return `# ${projectName}
${renderLicenseSection(license)}
### ~ ${moduleName}  📝
          
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

Please refer to the license badge, on top of this file.
`;
}

module.exports = generateMarkdown;
