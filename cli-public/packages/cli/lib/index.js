
import path from 'node:path';
import { program } from 'commander';
import semver from 'semver';
import fse from 'fs-extra';
import { dirname } from 'dirname-filename-esm';
import createInitCommand from '@niu-public-cli/init';
import { log, isDebug } from '@niu-public-cli/utils';
const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = fse.readJsonSync(pkgPath);

// 检查node版本
function checkNodeVersion() {
  log.verbose('node version', process.version);
  const LOWEST_NODE_VERSION = '18.0.0';
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(`niu-public-cli 需要安装 v${LOWEST_NODE_VERSION} 以上的 Node.js 版本`);
  }
}

// 拦截报错(throw new Error), 打印错误信息
process.on('uncaughtException', (e) => {
  if (isDebug()) {
    console.log(e);
  } else {
    console.log(e.message);
  }
  process.exit(1);
});

export default function (argv) {
  log.info('cli====>>>>>>>>', argv);
  program
    .version(pkg.version)
    .name(Object.keys(pkg.bin)[0])
    .option('-d, --debug', '是否开启调试模式', false)
    .usage('<command> [options]')
    .hook('preAction', checkNodeVersion);

  // niu-public-cli init aaa -f
  // program
  //   .command('init <name>')
  //   .description('init project')
  //   .option('-f, --force', '是否强制更新', false)
  //   .action((name, options) => {
  //     console.log("action ~ options:", name, options)
  //   });
  createInitCommand(program)
  program.parse(process.argv);
}