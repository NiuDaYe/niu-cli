import urlJoin from 'url-join';
import axios from 'axios';
import log from './log.js';

function getNpmInfo(npmName) {
  // cnpm源 https://registry.npmmirror.com/
  const registry = 'https://registry.npmjs.org/'
  const url = urlJoin(registry, npmName);
  return axios.get(url).then(function (res) {
    try {
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }

  })
}
export function getLatestVersion(npmName) {
  return getNpmInfo(npmName).then(data => {
    if (!data['dist-tags'] || (!data['dist-tags'].latest)) {
      log.error('getLatestVersion', '获取最新版本失败');
      return Promise.reject(new Error('获取最新版本失败'))
    }
    return data['dist-tags'].latest;
  });
}