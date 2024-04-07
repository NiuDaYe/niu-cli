import ora, { oraPromise } from "ora";

const spinner = ora("Loading").start();

// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "ReLoading...";
//   spinner.prefixText = "描述";
// }, 1000);

// setTimeout(() => {
//   spinner.stop();
// }, 2000);




// spinner.text = "DownLoading...";
// let percent = 0;
// let task = setInterval(() => {
//   percent += 10;
//   spinner.text = `DownLoading... ${percent}%`;
//   if (percent > 100) {
//     spinner.stop();
//     spinner.succeed("DownLoad Success");
//     clearInterval(task);
//   }
// }, 500);

(async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      spinner.stop();
    }, 3000);
  })

  await oraPromise(promise, {
    successText: "DownLoad Success",
    text: "Loading...",
    failText: "DownLoad Failed",
  });
})();