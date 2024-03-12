#!/usr/bin/env node
const lib = require('niuyulei-cli-lib')



// 注册一个命令  niuyulei-cli init --name pro
const argv = require('process').argv;
const command = argv[2];
const options = argv.slice(3);
if (options.length > 1) {
  let [option, param] = options;
  option = option.replace('--', '')

  if (lib[command]) { //  lib[command], niu-cli-lib内的方法去匹配
    lib[command]({ option, param })
    // console.log('执行 Init流程');
  } else {
    console.log('请输入Init命令');
  }
}

// 实现参数解析 --version和 init --name
if (command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '');
  if (globalOption === 'V' || globalOption === 'version') {
    console.log('1.0.0');
  }
}

