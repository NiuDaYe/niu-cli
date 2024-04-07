import path from 'node:path';
import { pathExistsSync } from 'path-exists'
import fse from 'fs-extra';
import ora from 'ora';
import { execa } from 'execa';
import { printErrorLog, log } from '@niu-public-cli/utils'

function mackCatchDir(targetPath) {
  const catchDir = path.resolve(targetPath, 'node_modules');
  // console.log("~ mackCatchDir ~ catchDir:", catchDir)
  if (!pathExistsSync(catchDir)) {
    fse.mkdirpSync(catchDir);
  } else {
    // console.log('mackCatchDir', '缓存目录已存在');
  }
}

async function downloadAddTemplate(targetPath, selectTemplate) {
  const { npmName, version } = selectTemplate;
  const installCommand = 'npm';
  const installArgs = ['install', `${npmName}@${version}`];
  const cwd = path.resolve(targetPath, 'node_modules');
  log.info("cwd:", cwd)
  await execa(installCommand, installArgs, { cwd });
}

export default async function downloadTemplate(selectTemplate) {
  const { targetPath, template } = selectTemplate;
  mackCatchDir(targetPath);
  const spinner = ora('正在下载模板...').start();
  try {
    await downloadAddTemplate(targetPath, template);
    spinner.stop();
    spinner.succeed('模板下载成功');
  } catch (e) {
    spinner.stop();
    printErrorLog(e);
  }
}