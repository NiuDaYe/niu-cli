
查看帮助  
  1.npx lerna -h
  2.npx lerna create -h

初始化项目    npx lerna init
创建项目a     npx lerna create a
创建项目b     npx lerna create b
创建项目cli   npx lerna create cli --access public --bin --es-module


安装chalk到a项目  npx lerna add chalk packages/a


执行测试：
1、进到a项目执行  npm run test
2、根目录全局     npx lerna run test


上线
根目录 npm run publish  (需要先提交代码才能publish)

