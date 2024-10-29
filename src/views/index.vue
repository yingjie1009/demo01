<template>
  <div class="wrap">
    <div>
      <div class="content">这是页面1</div>
      <el-button type="primary" @click="router.push('/index1')"
        >点击跳转页面2</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    margin-bottom: 15px;
  }
}
</style>
