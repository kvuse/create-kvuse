<template>
  <el-form :model="specifyTime" ref="ruleFormRef" :class="{'flex':isFlex}">
    <div class="flex-align-center">
      <slot name="title" :reset-form="resetForm">
        <span class="flex-shrink">指定日期：</span>
      </slot>
      <el-form-item prop="startDate" :rules="showStart ? rules.startDate : {}" v-show="showStart">
        <el-date-picker v-model="specifyTime.startDate" type="date" :disabled-date="disabledDate" value-format="YYYY-MM-DD" placeholder="请选择日期" class="width-picker" :editable="false" @change="changeStartDate" />
      </el-form-item>
      <el-form-item prop="startTime" :rules="showStart ? rules.startTime : {}" class="ml10" v-show="showStart">
        <div class="mr10 width-140">
          <el-time-select v-model="specifyTime.startTime" :min-time="minStartTime" :max-time="maxStartTime" placeholder="选择时间" start="00:00" :step="timeStep" end="23:30" @change="changeDateTime" @focus="getMinStartTime" />
        </div>
      </el-form-item>
    </div>
    <div class="flex-align-center" :class="{'mt20': !isFlex}">
      <slot name="separator" :reset-form="resetForm">
        <span class="ml10 mr10">至</span>
      </slot>
      <el-form-item prop="endDate" :rules="showEnd ? rules.endDate : {}" class="ml10" v-show="showEnd">
        <el-date-picker v-model="specifyTime.endDate" type="date" :disabled-date="disabledDateEnd" value-format="YYYY-MM-DD" placeholder="请选择日期" class="width-picker" :editable="false" @change="changeEndDate" />
      </el-form-item>
      <el-form-item prop="endTime" :rules="showEnd ? rules.endTime : {}" class="ml10" v-show="showEnd">
        <div class="mr10 width-140">
          <el-time-select v-model="specifyTime.endTime" :min-time="minTime" placeholder="选择时间" start="00:00" :step="timeStep" end="23:30" @change="changeDateTime" />
        </div>
      </el-form-item>
    </div>
  </el-form>
</template>

<script setup>
import { useForm } from '@kvuse/core';

const props = defineProps({
  isFlex: { type: Boolean, default: true },
  defaultTime: { type: Object, default: () => ({}) }, // 默认值
  timeStep: { type: String, default: '01:00' }, // 时间间隔
  limitNowTime: { type: Boolean, default: false }, // 是否限制当前时间
  maxDate: { type: String, default: '' }, // 最大选择日期
  showStart: { type: Boolean, default: true },
  showEnd: { type: Boolean, default: true },
});

const emit = defineEmits(['change']);

const specifyTime = reactive({
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
});

watch(() => props.defaultTime, (val) => {
  const [startVal, endVal] = val;
  if (specifyTime.startDate === '' && (startVal || endVal)) {
    if (startVal) {
      const [startDate, startTime] = startVal.split(' ');
      specifyTime.startDate = startDate;
      specifyTime.startTime = startTime.slice(0, 5);
    }
    if (endVal) {
      const [endDate, endTime] = endVal.split(' ');
      specifyTime.endDate = endDate;
      specifyTime.endTime = endTime.slice(0, 5);
    }
  }
}, { immediate: true });
const formatTime = (time) => (time < 10 ? `0${time}` : time);
const getCurrrentDay = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currentDay = `${date.getFullYear()}-${formatTime(month)}-${formatTime(day)}`;
  return currentDay;
};

const getCurrrentTime = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const isStep = props.timeStep === '01:00' ? `${formatTime(currentHours)}:00` : `${formatTime(currentHours)}:30`;
  return currentMinutes > 30 ? `${formatTime(currentHours + 1)}:00` : isStep;
};

const disabledDate = (time) => {
  if (!props.showEnd) return time.getTime() < Date.now() - 8.64e7;
  if (specifyTime.endDate) return (time.getTime() > new Date(`${specifyTime.endDate}`).getTime()) || (time.getTime() < Date.now() - 8.64e7);
  return time.getTime() < Date.now() - 8.64e7;
};
const disabledDateEnd = (time) => {
  if (!props.showStart) return time.getTime() < Date.now() - 8.64e7;
  if (specifyTime.startDate) return time.getTime() < new Date(`${specifyTime.startDate}`).getTime() - 8.64e7;
  return time.getTime() < Date.now() - 8.64e7;
};

const setMinTime = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();

  return currentMinutes > 30 ? `${currentHours}:30` : `${currentHours}:00`;
};
const minTime = computed(() => {
  if (specifyTime.startTime) {
    if (specifyTime.startDate && specifyTime.startDate === specifyTime.endDate) return specifyTime.startTime;
  } else if (specifyTime.endDate === getCurrrentDay()) return setMinTime();
  return '-';
});

const maxStartTime = computed(() => {
  if (props.showEnd) {
    if (specifyTime.endDate && specifyTime.endDate === specifyTime.startDate) return specifyTime.endTime;
  }
  return '24:00';
});

const rules = {
  startDate: [{
    type: 'date', required: true, message: '请选择开始日期', trigger: 'change',
  }],
  endDate: [{
    type: 'date', required: true, message: '请选择结束日期', trigger: 'change',
  }],
  startTime: [{ required: true, message: '请选择开始时间', trigger: 'change' }],
  endTime: [{ required: true, message: '请选择结束时间', trigger: 'change' }],
};

const changeDateTime = () => {
  const startDate = specifyTime.startDate && specifyTime.startTime ? `${specifyTime.startDate} ${specifyTime.startTime}:00` : '';
  const endDate = specifyTime.endDate && specifyTime.endTime ? `${specifyTime.endDate} ${specifyTime.endTime}:00` : '';
  emit('change', { startDate, endDate });
};

const minStartTime = ref('');
const getMinStartTime = () => {
  if (specifyTime.startDate && specifyTime.startDate === getCurrrentDay()) {
    minStartTime.value = setMinTime();
  }
};
const changeStartDate = (val) => {
  minStartTime.value = '';
  if (props.limitNowTime && val === getCurrrentDay()) {
    specifyTime.startTime = getCurrrentTime();

    minStartTime.value = setMinTime();
  } else specifyTime.startTime = '';
  changeDateTime();
};
const changeEndDate = (val) => {
  if (props.limitNowTime && val === getCurrrentDay() && val === specifyTime.startDate) {
    specifyTime.endTime = props.timeStep === '01:00' ? '23:00' : '23:30';
  } else specifyTime.endTime = '';
  changeDateTime();
};

const { ruleFormRef, submitForm, resetForm } = useForm();

const submit = async () => {
  if (!ruleFormRef.value) return true;
  const result = await submitForm();
  return result;
};

const reset = () => {
  if (!ruleFormRef.value) return true;
  resetForm();
};

defineExpose({ submit, reset });
</script>

<style lang="scss" scoped>

</style>
