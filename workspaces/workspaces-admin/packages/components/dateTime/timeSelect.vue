<template>
  <div class="time-select">
    <el-select v-model="timeValue" placeholder="请选择" v-bind="$attrs">
      <el-option
        v-for="(item,index) in options"
        :key="item.value"
        :label="item.label"
        :value="item.label"
        :disabled="disabledHandle(index)"
      >
      </el-option>
      <template #prefix>
        <el-icon size="17"><Clock /></el-icon>
      </template>
    </el-select>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  minTime: { type: String, default: '' },
  maxTime: { type: String, default: '' },
  step: { type: String, default: '00:30' },
});

const generateTimeSeries = () => {
  const timeSeries = [];
  const startTime = new Date('2000-01-01T00:00:00');
  const endTime = new Date('2000-01-02T06:00:00');

  while (startTime <= endTime) {
    const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const stepNum = Number(props.step.split(':')[1]);
    const maxNum = 24 * (60 / stepNum) - 1;
    const finialTimeString = timeSeries.length > maxNum ? `次日 ${timeString}` : timeString;
    timeSeries.push(finialTimeString);
    startTime.setMinutes(startTime.getMinutes() + stepNum);
  }

  return timeSeries.map((item, index) => ({ value: index, label: item }));
};
const options = ref(generateTimeSeries());

const emit = defineEmits(['update:modelValue']);

const timeValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const disabledHandle = (idx) => {
  const minIndex = options.value.findIndex((item) => item.label === props.minTime);
  const maxIndex = options.value.findIndex((item) => item.label === props.maxTime);
  const minLimit = minIndex > -1 ? idx <= minIndex : false;
  const maxLimit = maxIndex > -1 ? idx > maxIndex - 1 : false;
  return minLimit || maxLimit;
};

defineExpose({ options });
</script>

<style lang="scss">
.time-select {
  width: 180px;

  .el-select .el-input__suffix {
    display: none;
  }
}

</style>
