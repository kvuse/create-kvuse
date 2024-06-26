/**
 * @file axios请求封装
 * @author liukai
 * @url 详情 https://juejin.cn/user/3438928101651912
 */
import { useRequest } from '@kvuse/core';
import { closeToast, showToast } from 'vant';

const { setHeaderConfig } = useRequestHeader();
const { $api, $http } = useRequest({
  // 请求拦截器
  beforeRequest(config) {
    setHeaderConfig(config);
    return config;
  },
  // 响应处理
  errorResponse(error) {
    console.log('error: ', error);
  },
  // 报错提示
  errorHandler(message) {
    if (!message) return;
    // 弹出错误信息
    closeToast();
    showToast({ message, type: 'fail' });
  },
});

export default $api;

export { $http };
