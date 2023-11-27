<template>
  <view class="content flexs-center">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <button @click="addClick">add</button>
      <text class="title">{{ counter.count }}</text>
    </view>
  </view>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore();

// 可以手动触发
counter.$patch({ count: counter.count + 1 });
// 或者使用 actions
counter.increment();

const addClick = () => {
  counter.count++;
};

const title = ref('123');
</script>

<style>
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
