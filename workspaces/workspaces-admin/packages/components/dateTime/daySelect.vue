<template>
  <template v-for="(type,index) in list" :key="index">
    <div class="flex mt10">
      <el-select v-model="type.startMonth" placeholder="请选择" size="large" class="width-100" @change="changeStartDay(index,'start')">
        <el-option v-for="item in 12" :key="item" :label="item" :value="formData(item)" />
      </el-select>
      <span class="ml10 mr10">月</span>
      <el-select v-model="type.startDay" placeholder="请选择" size="large" class="width-100" @change="setTimeRank">
        <el-option v-for="item in startMonthDays" :key="item" :label="item" :value="formData(item)" />
      </el-select>
      <span class="ml10 mr10">日</span>
      <span class="ml10 mr10">——</span>
      <el-select v-model="type.endMonth" placeholder="请选择" size="large" class="width-100" @change="changeStartDay(index,'end')">
        <el-option v-for="item in 12" :key="item" :label="item" :value="formData(item)" />
      </el-select>
      <span class="ml10 mr10">月</span>
      <el-select v-model="type.endDay" placeholder="请选择" size="large" class="width-100" @change="setTimeRank">
        <el-option v-for="item in startMonthDays" :key="item" :label="item" :value="formData(item)" />
      </el-select>
      <span class="ml10 mr10">日</span>
      <el-button type="primary" circle class="ml20" @click="addTimeRank" v-if="!index && list.length < 3">
        <el-icon><Plus /></el-icon>
      </el-button>
      <el-button type="primary" plain circle class="ml20" @click="deleteTimeRank(index)" v-if="list.length > 1">
        <el-icon><Close /></el-icon>
      </el-button>
    </div>
  </template>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
});

const emit = defineEmits(['update:modelValue', 'change']);

const list = ref([]);
watch(() => props.modelValue, (val) => {
  list.value = val.map((item) => {
    const [startMonth = '01', startDay = '01'] = item.startDate.split('-');
    const [endMonth = '01', endDay = '01'] = item.endDate.split('-');
    return {
      startMonth, endMonth, startDay, endDay, ...item,
    };
  });
}, { deep: true, immediate: true });

const formData = (val) => (val < 10 ? `0${val}` : val);

const setTimeRank = () => {
  const currentList = list.value.map((item) => ({
    startDate: `${item.startMonth}-${item.startDay}`,
    endDate: `${item.endMonth}-${item.endDay}`,
  }));
  emit('update:modelValue', currentList);
  emit('change', currentList);
};

const startMonthDays = ref(31);
const endMonthDays = ref(31);
const changeStartDay = (index, type) => {
  const date = new Date();
  const year = date.getFullYear();
  const {
    startMonth, endMonth, startDay, endDay,
  } = list.value[index];
  const val = type === 'start' ? startMonth : endMonth;
  const currntMonthDay = new Date(year, val, 0).getDate();
  if (type === 'start') {
    startMonthDays.value = currntMonthDay;
    if (startDay > currntMonthDay) list.value[index].startDay = currntMonthDay;
  } else {
    endMonthDays.value = currntMonthDay;
    if (endDay > currntMonthDay) list.value[index].endDay = currntMonthDay;
  }
  setTimeRank();
};

const addTimeRank = () => {
  list.value.push({
    startMonth: '01', endMonth: '01', startDay: '01', endDay: '01', startDate: '01-01', endDate: '01-01',
  });

  setTimeRank();
};

const deleteTimeRank = (index) => {
  list.value.splice(index, 1);
  setTimeRank();
};

</script>

<style lang="scss" scoped>

</style>
