
import ora from 'ora';


export default () => {
  const spinner = ora('Loading unicorns').start();
  setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
    spinner.stop();
  }, 2000);
};