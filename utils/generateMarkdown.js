// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const array = [];
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/Generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created in dist folder.",
      });
    });
  });
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  if (license === "zLib License"){
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
}

// TODO: Create a function to generate markdown for README
/*The following "render" functions return their namesake sections
if a value is present.*/
const renderInstallSection = installPresent => {
  if (installPresent) {
    sections.push("## Installation" + "\n" + installPresent);
    return true;
  }
};

const renderUsageSection = usagePresent => {
  if (usagePresent) {
    sections.push("## Usage" + "\n" + usagePresent);
    return true;
  }
};

const renderLicenseSection = licensePresent => {
  if (licensePresent && licensePresent !== "None") {
    sections.push("## License" + "\n" + "This application is covered under a(n) " + licensePresent + " license.");
    return true;
  }
};

const renderContributionSection = contributionPresent => {
  if (contributionPresent) {
    sections.push("## Contributing" + "\n" + contributionPresent);
    return true;
  }
};

const renderTestSection = testPresent => {
  if (testPresent) {
    sections.push("## Tests" + "\n" + testPresent);
    return true;
  }
};

/* NOTE: dynamicTableOfContents, which calls the function to render each section,
is called before dynamicSections, and therefore populates the sections array  */
const dynamicSections = () => {
  let finalSecStr = "";

  sections.forEach(section => {
    finalSecStr = finalSecStr + "\n" + section + "\n";
  });

  return finalSecStr;
}

//Checks each section to see if it should be added to table of contents
const dynamicTableOfContents = sectionCheck => {
  let installation = renderInstallSection(sectionCheck.install);
  let usage = renderUsageSection(sectionCheck.usage);
  let license = renderLicenseSection(sectionCheck.license);
  let contribution = renderContributionSection(sectionCheck.contribution);
  let test = renderTestSection(sectionCheck.test);
  let questions = "[Questions](#questions)";
  let finalTocStr = "";
  const tocArray = [];

  if(installation){
    installation = "[Installation](#installation)";
    tocArray.push(installation);
  }else{
    installation = "";
  }
  if(usage){
    usage = "[Usage](#usage)";
    tocArray.push(usage);
  }else{
    usage = "";
  }
  if(license){
    license = "[License](#license)";
    tocArray.push(license);
  }else{
    license = "";
  }
  if(contribution){
    contribution = "[Contributing](#contributing)";
    tocArray.push(contribution);
  }else{
    contribution = "";
  }
  if(test){
    test = "[Tests](#tests)"
    tocArray.push(test);
  }else{
    test = "";
  }
  tocArray.push(questions);

  tocArray.forEach((item, index) => {
    let num = index + 1;
    if(index == 0) {
      finalTocStr = num + ". " + item;
    } else {
      finalTocStr = finalTocStr + "\n" + num + ". " + item;
    }
  });

  return finalTocStr;
}
const generateMarkdown = data => {
return `# <div style="display: flex; flex-wrap: wrap; justify-content: space-between"><div>${data.title}</div><div>${renderLicenseBadge(data.license)}</div></div>
## Description
${data.description}
## Table of Contents
${dynamicTableOfContents(data)}
${dynamicSections()}
## Questions
For questions, comments, or suggestions, please reach out to [${data.github}](https://github.com/${data.github}) via email at <a href="mailto:${data.email}">${data.email}</a>.
`;};

module.exports = {generateMarkdown, writeToFile };