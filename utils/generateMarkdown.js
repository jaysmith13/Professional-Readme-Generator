// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const array = [];
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license !== 'no license') {
  return `
![badge](https://img.shields.io/badge/license-${license}-blue)
  `;
} else {
  return ' ';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

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