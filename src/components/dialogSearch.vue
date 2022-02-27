<template>
  <el-button type="primary" @click="search">开始</el-button>
  <el-dialog v-model="openSearch">
    <el-card v-for="i of res" :key="i.Name" class="m-card">
      <el-image :src="i.alSrc" alt="专辑图" />
      <el-descriptions :title="i.Name" style="width: 600px">
        <el-descriptions-item label="专辑">{{ i.alName }}</el-descriptions-item>
        <el-descriptions-item label="歌手">{{ i.arName }}</el-descriptions-item>
      </el-descriptions>
      <div style="width: 100%">
        <el-button type="primary" @click="play(i.Id)">播放</el-button>
      </div>
    </el-card>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";
import querySearch from "../apis/querySearch";
import { Music } from "../apis/MusicBuilder";
import { ElMessage } from "element-plus";

const props = defineProps({
  keyword: String,
});

const emit = defineEmits(["play"]);

let res = ref([] as Music[]);
const openSearch = ref(false);
const search = () => {
  if (props.keyword != "") {
    openSearch.value = true;
  } else {
    ElMessage({
      message: "请输入需要搜索的音乐",
      type: "warning",
    });
  }
};
watchEffect(() => {
  querySearch(props.keyword).then((result) => (res.value = result));
});

const play = (id: number) => {
  emit("play", id);
  openSearch.value = false;
};
</script>

<style scoped lang="scss">
.m-card {
  height: 10vh;
  margin-top: 5px;
  & .el-image {
    height: 100%;
    width: 10%;
    margin-right: 15px;
  }
  & .el-button {
    float: right;
  }
}
:deep(.el-card__body) {
  display: flex;
  flex-direction: row;
}
</style>
