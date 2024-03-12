const inquirer = require('inquirer');
// type分为 input, number, confirm, list, rawlist, expand, checkbox, password, editor
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your object name?",
      // default: 'defaultName',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your object name';
        }
      },
      // 操作valve的值不会修改原始值，通过then查看结果
      // transformer: function (value) {
      //   // return value.toUpperCase();
      //   return '前缀:' + value + '后缀';
      // },
      // 操作valve的值会修改原始值，通过then查看结果
      filter: function (value) {
        return '前缀:' + value + '后缀';
      }
    },
    { type: 'password', name: 'password', message: "What's your password?" },
    { type: 'number', name: 'num', message: "What's your number?" },
    { type: 'editor', name: 'editor', message: "What's your editor?" },
    // {
    //   type: 'confirm',
    //   name: 'choice',
    //   message: 'Do you want to choice?',
    //   default: false
    // },
    {
      type: 'list',
      name: 'choice',
      message: 'Do you want to choice?',
      default: 0,
      choices: [{ value: 0, name: 'niu0' }, { value: 1, name: 'yu1' }, { value: 2, name: 'lei2' }]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });