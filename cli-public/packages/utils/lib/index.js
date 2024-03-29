import log from './log.js';
import isDebug from './isDebug.js';
import { makeList, makeInput } from './inquirer.js'
import { getLatestVersion } from './npm.js';


function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
  process.exit(1);
}

export { log, isDebug, makeList, makeInput, getLatestVersion, printErrorLog }; 