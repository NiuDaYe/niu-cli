// const pkg = require('../package.json');

export default class command {
    constructor(instance) {
        if (!instance) {
            throw new Error('instance is required');
        }
        this.program = instance;
        // niu-public-cli init aaa -f -vv
        const cmd = this.program.command(this.command);
        cmd.description(this.description);

        // 脚手架hook注册
        cmd.hook('preAction', () => {
            this.preAction();
        });

        cmd.hook('postAction', () => {
            this.postAction();
        });

        if (this.options?.length > 0) {
            this.options.forEach(option => {
                cmd.option(...option);
            });

        }
        cmd.action((...params) => {
            this.action(params);
        });
    }

    get command() {
        throw new Error('command 必须实现');
    }

    get description() {
        throw new Error('description 必须实现');
    }

    get options() {
        return [];
    }

    get action() {
        throw new Error('action 必须实现');
    }

    preAction() {
        // console.log('preAction');
    }

    postAction() {
        // console.log('postAction');
    }

}


// export default command;