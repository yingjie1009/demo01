<script setup lang="ts">
// 中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 切换为中文
const locale = zhCn;

</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
  
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
input{
  padding: 0;
  margin: 0;
}
input:focus {
  outline: none;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
