<template>
  <el-button type="primary" @click="openSearch = true">开始</el-button>
  <el-dialog v-model="openSearch">
    <el-card v-for="i of res" :key="i.Name" class="m-card">
      <el-image :src="i.alSrc" alt="专辑图" />
      <el-descriptions :title="i.Name" border>
        <el-descriptions-item label="专辑">{{ i.alName }}</el-descriptions-item>
        <el-descriptions-item label="歌手">{{ i.arName }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, watchEffect } from "vue";
import querySearch from "../apis/querySearch";
import { Music } from "../apis/MusicBuilder";

const props = defineProps({
  keyword: String,
});

let res = ref([] as Music[]);
const openSearch = ref(true);
watchEffect(() => {
  querySearch(props.keyword).then((result) => (res.value = result));
});
</script>

<style scoped lang="scss">
.m-card {
  height: 10vh;
  & .el-image {
    height: 100%;
    width: 6vh;
  }
}
:deep(.el-card__body) {
  display: flex;
  flex-direction: row;
}
</style>
