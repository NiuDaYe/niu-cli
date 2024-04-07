import Command from '@niu-public-cli/command';
import { log } from '@niu-public-cli/utils';
import createTemplate from './createTemplate.js';
import downloadTemplate from './downloadTemplate.js';
import installTemplate from './installTemplate.js';


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
            // ['-vv, --vvvv', '是否强制vv', false],
            ['-t , --type <type>', '项目类型(值: project/page)']
        ];
    }

    async action([name, options]) {
        log.verbose('init action=====>:', name, options);
        // new Promise(function (resolve, reject) {
        //     resolve()
        // }).then(function () {
        //     throw new Error('Error is from cli-public/packages/init/lib/indexjs Promise错误')
        // })
        // throw new Error('Error is from cli-public/packages/init/lib/indexjs 普通错误')

        // 1.选择项目模板，生成项目信息
        const selectTemplate = await createTemplate(name, options);
        // 2.下载项目模板到缓存目录
        await downloadTemplate(selectTemplate);
        // 3. 安装项目模板到项目目录
        await installTemplate(selectTemplate, options)
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