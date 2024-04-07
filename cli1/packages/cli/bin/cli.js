#!/usr/bin/env node

import importLocal from 'import-local';
import { filename } from 'dirname-filename-esm';
import { log } from '@niu-public-cli/utils';
import entry from '../lib/index.js'

const __filename = filename(import.meta);

// 优先加载本地脚手架版本
if (importLocal(__filename)) {
  log.info('cli', '使用本地脚手架版本')
} else {
  // niu-public-cli 123  即可在命令行中打印出 cli [ '123' ]
  entry(process.argv.slice(2))
} 