
import createInitCommand from '@niu-public-cli/init';
import createCLI from './createCLI.js'
import './exception.js'

export default function (argv) {
  const program = createCLI();
  createInitCommand(program)
  program.parse(process.argv);
}

