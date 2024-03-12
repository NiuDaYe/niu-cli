#!/usr/bin/env node
const commander = require('commander');
const package = require('../package.json');

// 单例模式写法
const { program } = commander;

// 手动实例化写法
// const program = new commander.Command();

program
  .name(Object.keys(package.bin)[0])
  .usage('<command> [options]')
  .version(package.version)
  .option('-d, --debug', 'output extra debugging')
  .option('-e, --env <env>', 'set env')
  .parse(process.argv);

// 注册命令
const clone = program.command('clone <source> [destination]');
// niuyulei-cli clone http://git.com 123
clone
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called====', source, destination);
  }).parse(process.argv);

// addCommand 用于注册子命令
const service = new commander.Command('service');
// niuyulei-cli service start 8888
service
  .command('start [port]')
  .description('start service at port')
  .action((port) => {
    console.log('start service at port', port);
  });

//niuyulei-cli service stop
service.command('stop')
  .description('stop service')
  .action(() => {
    console.log('stop service');
  });

// niuyulei-cli cmd 123
program
  .arguments('<cmd> [env]')
  .description('test command')
  .action((cmd, env) => {
    console.log('test command called', cmd, env);
  });

program.addCommand(service).parse(process.argv);


