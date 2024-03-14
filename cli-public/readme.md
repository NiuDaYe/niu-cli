一、初始化项目  lerna init
二、创建项目    lerna create cli
  1.新建bin文件夹, clijs放到bin目录
  2.cli项目内packagejson 的files属性必须包含bin文件

三、添加依赖到cli:   
  lerna add import-local packages/cli
  lerna add npmlog packages/cli
  lerna add commander packages/cli

四、新建command和Init项目
  1、init项目引入command项目
  2、cli项目引入init项目
  niu-public-cli init aa -f -vv






  semver: npm库a.b.c 格式的数值进行比较,一般用于版本比较