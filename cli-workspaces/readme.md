先根目录 npm init -y
然后 npm init --workspace a --workspace b 创建多个项目
npm i chalk -w a;   // -w是--workspace缩写， 给a项目安装chalk包。

安装a项目到cli项目  npm i a -w cli 

启动本地代码测试  node cli/bin/cli.mjs 或者npm run dev

更新本地代码改动 npm install -ws
单独发布项目a
npm publish -w a;

一起发布所有项目
npm publish -ws ===  npm publish --workspace


发布完成后，全局安装  npm i -g ws-niu-cli
然后直行 ws-niu-cli



