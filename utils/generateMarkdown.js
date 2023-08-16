const licensesData = require("./licenses.json");

// get license by name
function getLicenseData(name) {
  return licensesData.licenses.filter(function (license) {
    return license.name == name;
  });
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// * note: licenses list for creating the json file were taken from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7b

function renderLicenseBadge(licenseObject) {
  return licenseObject ? `${licenseObject[0].badge}` : ``;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObject) {
  return licenseObject ? `${licenseObject[0].link}` : ``;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName) {
  let licenseFound = getLicenseData(licenseName);
  let licenseBadge = renderLicenseBadge(licenseFound);
  let licenseLink = renderLicenseLink(licenseFound);
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
  username,
  email,
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
- [Questions](#questions)

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

## Questions

Any question, please feel free to contact me directly via email ${email} or via https://github.com/${username}
`;
}

module.exports = generateMarkdown;
