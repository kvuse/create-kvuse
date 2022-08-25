import $api from '@/utils/request';

export const collectApi = {
  /**  店铺列表 */
  storeList: (params) => $api.get('/erp/global', params), // 店铺列表
};
