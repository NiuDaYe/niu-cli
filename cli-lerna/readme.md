
查看帮助  
  1.npx lerna -h
  2.npx lerna create -h

初始化项目    npx lerna init
创建项目a     npx lerna create a
创建项目b     npx lerna create b
创建项目cli   npx lerna create cli --access public --bin --es-module


安装chalk到a项目  npx lerna add chalk packages/a

安装a和b项目到cli  
  npx lerna add niu-lerna-a packages/cli
  npx lerna add niu-lerna-b packages/cli


执行测试：
1、进到a项目执行  npm run test
2、根目录全局     npx lerna run test


上线
根目录 npm run publish  (需要先提交代码才能publish)

 - niu-lerna-a@0.0.1
 - niu-lerna-b@0.0.1
 - niu-lerna-cli@0.0.1


全局安装 npm i -g niu-lerna-cli

