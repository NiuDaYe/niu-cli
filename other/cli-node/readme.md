1、npm init -y 初始化项目。
2、新建bin文件夹index.js文件
3、package.json添加
``
  "bin": {
    "niu-node-cli": "bin/index.js"
  },
``
4、npm login
注意如果npm设置的淘宝源，先删除`npm config delete registry`

5、npm publish
注意 【 1、packagejson里面的name(niu-node-cli)需要唯一，2、每次发布需要更新版本号。要不然发布不上去。】

6、调试本地开发的脚手架
可以先移除全局 `niuyulei-cli`: `npm remove -g niu-node-cli`
然后在当前开发目录执行 `npm link`即可。

7、分包
创建niu-cli-lib 文件夹。npm init -y, niu-cli引入niu-node-cli-lib

8、脚手架本地Link标准流程
  链接本地脚手架:
  cd niu-node-cli
  npm link

  链接本地库文件:
  cd niu-node-cli-lib
  npm link
  cd niu-node-cli
  npm link niu-node-cli-lib

  取消链接本地库文件:
  cd niu-node-cli-lib
  npm unlink
  cd niu-node-cli
  npm unlink niu-node-cli-lib
  rm -rf node_modules
  npm i -S niu-node-cli-lib

  理解 npm link:
  npm link niu-node-cli-lib:将当前项目中 nde modules 下指定的库文件链接到 node 全局 node modules下的库文件
  npm link:将当前项目链接到 node全局node_modules中作为一个库文件，并解析 bin 配置创建可执行文件

  理解 npm unlink:
  npm unlink:将当前项目从 node 全局node_modules 中移除
  npm unlink niu-node-cli-lib:将当前项目中的库文件依赖移除.




  niu-node-cli init --name pro