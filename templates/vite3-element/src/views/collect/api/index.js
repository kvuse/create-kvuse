import $api from '@/utils/request';

export const collectApi = {
  /**  店铺列表 */
  storeList: (params) => $api.get('/admin/retail', params), // 店铺列表
};
