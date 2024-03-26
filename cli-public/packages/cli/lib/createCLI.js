import path from 'node:path';
import semver from 'semver';
import fse from 'fs-extra';
import { program } from 'commander';
import { dirname } from 'dirname-filename-esm';
import { log } from '@niu-public-cli/utils';
const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = fse.readJsonSync(pkgPath);

// 检查node版本
function checkNodeVersion() {
  log.verbose('node version', process.version);
  const LOWEST_NODE_VERSION = '12.0.0';
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(`niu-public-cli 需要安装 v${LOWEST_NODE_VERSION} 以上的 Node.js 版本`);
  }
}


export default function createCLI() {
  program
    .version(pkg.version)
    .name(Object.keys(pkg.bin)[0])
    .option('-d, --debug', '是否开启调试模式', false)
    .usage('<command> [options]')
    .hook('preAction', checkNodeVersion);

  // 监听option特定选项
  program.on('option:debug', function () {
    console.log("🚀 ~ program.opts():", program.opts())
    if (program.opts().debug) {
      log.verbose('debug', '要打印debug日志了')
    }
  })

  // 未知命令监听
  program.on('command:*', function (command) {
    log.error('未知的命令' + command[0])
  })

  return program;

  // niu-public-cli init aaa -f
  // program
  //   .command('init <name>')
  //   .description('init project')
  //   .option('-f, --force', '是否强制更新', false)
  //   .action((name, options) => {
  //     console.log("action ~ options:", name, options)
  //   });
}