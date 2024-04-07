import chalk from 'chalk';

console.log(chalk.red('ni hao a'));
console.log(chalk.red('ni hao a') + '!!!!' + chalk.blue('hehehhe'));
console.log(chalk.red.bgGreen.bold('ni hao a'));
console.log(chalk.red('ni', 'hao', 'a'));
console.log(chalk.red('ni hao a', chalk.underline.bgBlue('hehehhe')));
console.log(chalk.rgb(255, 233, 0).underline('ni hao a'));
console.log(chalk.rgb(255, 233, 0)('ni hao a'));

const error = (...text) => console.log(chalk.red.bold(...text));
error('111');