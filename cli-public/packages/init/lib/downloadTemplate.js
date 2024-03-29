import path from 'node:path';
import { pathExistsSync } from 'path-exists'
import fse from 'fs-extra';
import ora from 'ora';
import { printErrorLog } from '@niu-public-cli/utils'

function mackCatchDir(targetPath) {
  const catchDir = path.resolve(targetPath, 'node_modules');
  // console.log("~ mackCatchDir ~ catchDir:", catchDir)
  if (!pathExistsSync(catchDir)) {
    fse.mkdirpSync(catchDir);
  } else {
    // console.log('mackCatchDir', '缓存目录已存在');
  }

}
export default function downloadTemplate(selectTemplate) {
  const { targetPath, templatePath } = selectTemplate;
  mackCatchDir(targetPath);
  const spinner = ora('正在下载模板...').start();
  try {
    setTimeout(() => {
      spinner.stop();
      spinner.succeed('模板下载成功');
    }, 1000);
  } catch (e) {
    spinner.stop();
    printErrorLog(e);
  }
}