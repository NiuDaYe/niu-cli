import { homedir } from 'node:os';
import path from 'node:path';
import { log, makeList, makeInput, getLatestVersion } from '@niu-public-cli/utils'

const ADD_TYPE_PROJECT = 'project';
const ADD_TYPE_PAGE = 'page';
const ADD_TYPE = [
  {
    name: '项目',
    value: ADD_TYPE_PROJECT,
  },
  {
    name: '页面',
    value: ADD_TYPE_PAGE,
  },
];

const ADD_TEMPLATE = [{
  name: 'react项目模板',
  value: 'template-react',
  npmName: 'niu-template-react',
  version: '1.0.0'
}, {
  name: '测试选项(不要选)(没有模板)',
  value: 'template-vue',
  npmName: 'niu-template-vue',
  version: '1.0.0'
}]

const TEMP_HOME = './.cli-template';

// 获取创建类型
function getAddType() {
  return makeList({
    choices: ADD_TYPE,
    message: '请选择初始化创建类型',
    defaultValue: ADD_TYPE_PROJECT
  })
}

// 获取项目名称
function getAddName() {
  return makeInput({
    message: '请输入项目名称',
    // defaultValue: 'my-project',
    defaultValue: '',
    validate(v) {
      if (v.length > 0) {
        return true;
      } else {
        return '请输入项目模板';
      }
    }
  })
}

// 获取模板
function getAddTemplate() {
  return makeList({
    choices: ADD_TEMPLATE,
    message: '请选择模板',
    defaultValue: ADD_TEMPLATE[0].value
  })
}

// 生成目标路径
function makeTargetPath() {
  return path.resolve(`${homedir()}/${TEMP_HOME}`, 'addTemplate');
}

export default async function createTemplate(name, options) {
  const addType = await getAddType(); //  project | page

  if (addType === ADD_TYPE_PROJECT) { // write project name
    const projectName = await getAddName();
    const addTemplate = await getAddTemplate(); // 选择模板
    const selectedTemplate = ADD_TEMPLATE.find(item => item.value === addTemplate);
    const latestVersion = await getLatestVersion(selectedTemplate.npmName);
    selectedTemplate.version = latestVersion;

    const targetPath = makeTargetPath();
    return {
      type: addType,
      name: projectName,
      template: selectedTemplate,
      targetPath
    }

  }
}