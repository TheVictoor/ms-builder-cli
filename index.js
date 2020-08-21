#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');

const TEMPLATE_OPTIONS = fs.readdirSync(`${__dirname}/templates`);

const ARGUMENTS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'Lib do servidor',
    choices: TEMPLATE_OPTIONS
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Nome do projeto:',
    validate: function (input) {
      const namePattern = /^bf[fb]-ms-([a-z-]*)$/;
      if (namePattern.test(input)) return true;
      else return 'Nome do projeto deve iniciar com bff-ms- ou bfb-ms- e seguir incluindo apenas letras minusculas';
    }
  }
];

const CURR_DIR = process.cwd();

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

    // get stats about the current file
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