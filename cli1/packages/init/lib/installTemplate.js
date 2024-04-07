
import fse from 'fs-extra';
import path from 'node:path';
import ora from 'ora';
import ejs from 'ejs';
import { glob } from 'glob';
import { pathExistsSync } from 'path-exists';
import { log } from '@niu-public-cli/utils'

function getCachedFile(targetPath, template) {
  // 查找本地缓存目录 
  // ~/.cli-template/addTemplate/node_modules/niu-template-react/template
  return path.resolve(targetPath, 'node_modules', template.npmName, 'template')
}

function copyFile(targetPath, template, installDir) {
  const originalFile = getCachedFile(targetPath, template)
  const fileList = fse.readdirSync(originalFile)
  const spinner = ora('正在copy模板文件...').start();
  fileList.map(file => {
    fse.copySync(`${originalFile}/${file}`, `${installDir}/${file}`);
  });
  spinner.stop();
  log.success('模板copy成功！');
}

async function ejsRender(installDir) {
  const files = await glob('**', { cwd: installDir, nodir: true, ignore: ['node_modules/**', 'public/**'] });
  files.forEach(file => {
    const filePath = path.join(installDir, file);
  })
}

export default async function installTemplate(selectTemplate, options) {
  const { force = true } = options;
  const { targetPath, template, name } = selectTemplate;
  const rootPath = process.cwd();
  fse.ensureDirSync(targetPath);

  const installDir = path.resolve(`${rootPath}/${name}`);
  if (pathExistsSync(installDir)) {
    if (!force) {
      log.error(`当前目录下已存在${installDir}文件夹`);
      return;
    } else {
      fse.removeSync(installDir);
      fse.ensureDirSync(installDir);
    }
  } else {
    fse.ensureDirSync(installDir);
  }

  copyFile(targetPath, template, installDir);

  // ejsRender(installDir);

}