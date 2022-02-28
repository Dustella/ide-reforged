<template>
  <el-button type="primary" @click="search">开始</el-button>
  <el-button type="success" @click="rank">排行榜</el-button>
  <el-dialog v-model="openSearch">
    <el-scrollbar height="60vh">
      <el-card v-for="i of res" :key="i.Name" class="m-card">
        {{ i.Name }}
        <el-image :src="i.alSrc" alt="专辑图" />
        <el-descriptions :title="i.Name" style="width: 600px">
          <el-descriptions-item label="专辑">{{
            i.alName
          }}</el-descriptions-item>
          <el-descriptions-item label="歌手">{{
            i.arName
          }}</el-descriptions-item>
        </el-descriptions>
        <div style="width: 100%">
          <el-button type="primary" @click="play(i.Id)">播放</el-button>
        </div>
      </el-card>
    </el-scrollbar>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";
import querySearch from "../apis/querySearch";
import Music from "../apis/Music";
import getRank from "../apis/getRank";
import { ElMessage } from "element-plus";

const props = defineProps({
  keyword: String,
});

const emit = defineEmits(["onModifyBgm"]);

let res = ref([] as Music[]);
const openSearch = ref(false);
const openRank = ref(false);

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

const rank = () => {
  openSearch.value = true;
  openRank.value = true;
  getRank().then((res) => {
    console.log(res);
  });
};
watchEffect(() => {
  if (props.keyword != "") {
    querySearch(props.keyword).then((result) => {
      console.log(result);
      res.value = result;
    });
  }
});

const play = (id: number) => {
  emit("onModifyBgm", id);
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
