import { log, isDebug } from '@niu-public-cli/utils';

function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
  process.exit(1);
}

// 拦截报错(throw new Error), 打印错误信息
process.on('uncaughtException', (e) => printErrorLog(e, 'error'));

// nodejs 打印错误信息
process.on('unhandledRejection', (e) => printErrorLog(e, 'promise'))