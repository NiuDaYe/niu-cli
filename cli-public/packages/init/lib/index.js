import Command from '@niu-public-cli/command';
import { log } from '@niu-public-cli/utils';

class initCommand extends Command {
    get command() {
        return 'init [name]';
    }

    get description() {
        return 'init project';
    }

    get options() {
        return [
            ['-f, --force', '是否强制更新', false],
            ['-vv, --vvvv', '是否强制vv', false]
        ];
    }

    action([name, options]) {
        log.verbose('init action=====>:', name, options);
        new Promise(function (resolve, reject) {
            resolve()
        }).then(function () {
            throw new Error('Error is from cli-public/packages/init/lib/indexjs Promise错误')
        })
        throw new Error('Error is from cli-public/packages/init/lib/indexjs 普通错误')
    }

    preAction() {
        log.info('preAction');
    }

    postAction() {
        log.info('postAction');
    }
}

function Init(instance) {
    return new initCommand(instance);
}

export default Init;