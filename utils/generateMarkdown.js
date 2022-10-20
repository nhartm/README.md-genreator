// TODO: Create a function that returns a license badge based on which license is passed in
function userLicense(license) {
  let licenseType = license.license
  let userLicense = ''
  if (userLicense === 'MIT') {
    userLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
  } else if (userLicense === 'GPLv3') {
    userLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'
  } else if (userLicense === 'GPLv2') {
    userLicense = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (userLicense === 'apache') {
    userLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (userLicense === 'other') {
    userLicense = null
  }
  return userLicense
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License: # ${userLicense}
  ## Table of Contents: 
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Contact Information](#contact information)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License: 
  ${data.license}

  ## Contributing: 
  ${data.contributing}

  ## Testing:
  ${data.tests}

  ## Contact Information: 
  ${data.questions}

`;
}

module.exports = generateMarkdown;
