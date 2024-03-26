import path from 'node:path';
import { execa } from 'execa';

const CLI = path.join(__dirname, '../bin/cli.js');
const bin = () => (...args) => execa(CLI, args);


// 运行错误的命令
test('this is cli-testjs  error', async () => {
  const res = await bin()('iii');
  console.log("🚀 ~ test ~ stderr:", res.stderr)
})