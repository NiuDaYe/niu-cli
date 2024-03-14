module.exports = function isDebug() {
  return process.argv.includes('-d') || process.argv.includes('--debug');
}