import log from 'npmlog';
import isDebug from './isDebug.js';


// 日志类型：verbose info warn error timing http notice silly silent
if (isDebug()) {
  log.level = 'verbose'; // 调试级别
} else {
  log.level = 'info'; // 默认是info
}

log.heading = 'niu-public-cli'; // 修改日志的前缀

log.addLevel('success', 2000, { fg: 'green', bg: 'red', bold: true }); // 自定义成功日志样式

export default log