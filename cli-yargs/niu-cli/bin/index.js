#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const cli = yargs(hideBin(process.argv));

cli
  .usage('Usage: $0 <command> [options]') // 打console.log的时候会显示这个
  .alias('h', 'help') // 别名
  .alias('v', 'version') // 别名
  .demandCommand(1, 'You need at least one command before moving on!!') // 如果没有命令的话会报错
  .wrap(cli.terminalWidth()) // 控制台宽度
  .options({
    debug: {
      type: 'boolean',
      describe: 'Run in debug mode',
      alias: 'd'
    }
  })
  .command( // niuyulei-cli init // niuyulei-cli init -h
    'init [name]',
    'Do init a project',
    (yargs) => {
      yargs.option('name', {
        type: 'string',
        default: 'hello-world',
        describe: 'Name of the project',
        alias: 'n'
      });
    }, (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: 'list',
    aliases: ['ls', 'la', 'll'],
    describe: 'List files in the directory',
    builder: (yargs) => {
      return yargs.option('all', {
        alias: 'a',
        describe: 'Show all files',
        type: 'boolean'
      });
    },
    handler: (argv) => {
      console.log(argv);
    }
  })
  // .recommandCommands() // 如果命令错误的话会给出推荐的命令 
  .fail((err, msg) => {
    console.log('err', err);
  })
  .strict() // 严格模式 命令错误的话报错

  .argv;