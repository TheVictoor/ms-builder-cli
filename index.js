#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');

const TEMPLATE_OPTIONS = fs.readdirSync(`${__dirname}/templates`);
const CURR_DIR = process.cwd();
const ARGUMENTS = [
  {
    name: 'project-lib-base',
    type: 'list',
    message: 'base server lib',
    choices: TEMPLATE_OPTIONS
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'project name:',
    validate: function (input) {
      const namePattern = /^ms-([a-z-]*)$/;
      if (namePattern.test(input)) 
        return true;
      else 
        return 'Name must start with "ms-" and contains just lower case letters separated by "-"';
    }
  }
];


inquirer.prompt(ARGUMENTS)
  .then(answers => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
  });

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
}
