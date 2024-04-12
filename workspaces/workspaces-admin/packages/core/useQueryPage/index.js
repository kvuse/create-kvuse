export function useQueryPage() {
  const currentPage = ref(1);
  const listData = ref([]);
  const loading = ref(false);
  const isNullData = ref(false);
  const total = ref(1);
  const records = ref([]);
  const pageSize = ref(10);
  const pageSizes = ref([10, 20, 50, 100]);

  /**
   * 删除判断是否跳转上一页
   * @param {array} delList 删除的商品列表(批量删除)
   * @param {array} list // 当前商品列表
   * @returns currentPage
   */
  const getNowPage = (delList = [], list = listData.value) => {
    const isLastPage = currentPage.value > 1 && (list.length === 1 || list.length === delList.length);
    if (isLastPage) currentPage.value--;
    return currentPage.value;
  };

  const setListAndPage = (result, isMerge = false) => {
    if (result) {
      total.value = result?.total ?? result?.rowCount;
      records.value = result?.content ?? result?.records ?? result?.subList;
      const listTmp = records.value;
      listData.value = isMerge ? [...listData.value, ...listTmp] : listTmp;
      currentPage.value = result?.current ?? result?.curPage;
      if (result?.pageSizes) pageSizes.value = result?.pageSizes;
      isNullData.value = !listData.value.length;
    }
  };

  const send = async (urlFetch, callback) => {
    loading.value = true;
    const result = await urlFetch;
    setListAndPage(result);
    loading.value = false;
    if (result && callback) callback(result);
    return result;
  };

  return {
    currentPage, listData, records: listData, tableData: records, loading, getNowPage, setListAndPage, isNullData, send, pageSize, pageSizes, total,
  };
}
