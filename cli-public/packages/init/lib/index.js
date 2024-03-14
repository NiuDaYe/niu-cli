const Command = require('@niu-public-cli/command');
const { log } = require('@niu-public-cli/utils');

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

module.exports = Init;