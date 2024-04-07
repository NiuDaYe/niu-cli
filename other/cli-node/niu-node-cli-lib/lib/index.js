module.exports = {
  sum(a, b) {
    return a + b;
  },
  mul(a, b) {
    return a * b;
  },
  init({ option, param }) {
    console.log("=====niu-node-cli-lib======");
    console.log('执行init', option, param);
  }
}