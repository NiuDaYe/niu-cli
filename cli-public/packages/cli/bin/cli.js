#!/usr/bin/env node

const importLocal = require('import-local');
const { log } = require('@niu-public-cli/utils')
const entry = require('../lib/index')

if (importLocal(__filename)) {
  log.info('cli', 'using local version of cli')
} else {

  // niu-public-cli 123  即可在命令行中打印出 cli [ '123' ]
  entry(process.argv.slice(2))
} 