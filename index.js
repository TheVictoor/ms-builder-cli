#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const ejs = require('ejs');
const yargs = require('yargs');

const TEMPLATE_OPTIONS = fs.readdirSync(`${__dirname}/templates`);
const CURR_DIR = process.cwd();
const ARGUMENTS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like generate',
    choices: TEMPLATE_OPTIONS,
    when: () => !yargs.argv["template"]
  },
  {
    name: 'name',
    type: 'input',
    message: 'What will be the project name',
    validate: function (input) {
      const namePattern = /^ms-([a-z-]*)$/;
      if (namePattern.test(input)) 
        return true;
      else 
        return 'Name must start with "ms-" and contains just lower case letters separated by "-"';
    },
    when: () => !yargs.argv["name"]
  }
];

inquirer.prompt(ARGUMENTS)
  .then(answers => {
    answers = Object.assign({}, answers, yargs.argv);
    const template = answers['template'];
    const name = answers['name'];
    const path = `${__dirname}/templates/${template}`;

    fs.mkdirSync(`${CURR_DIR}/${name}`);

    createDirectoryContents(path, name, name);
  });

function createDirectoryContents(templatePath, newProjectPath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');
      contents = render(contents, { 
        projectName 
      });
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, projectName);
    }
  });
}

function render(content, data) {
  return ejs.render(content, data);
}
