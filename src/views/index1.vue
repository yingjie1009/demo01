<template>
  <div class="wrap">
    <div>
      <div class="content">这是页面2</div>
      <el-button type="primary" @click="router.push('/')"
        >点击跳转页面1</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getWeather } from "@/api";
import { useRouter } from "vue-router";

const router = useRouter();

const getWeaInfo = async () => {
  let params = {
    location: "101010100",
    key: "0098f25b7e7c41a4a29ffe38bc611be4",
  };
  let res = await getWeather(params);
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    margin-bottom: 15px;
  }
}
</style>
