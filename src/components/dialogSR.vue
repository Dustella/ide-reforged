<template>
  <el-button type="primary" @click="search">开始</el-button>
  <el-button type="success" @click="rank">排行榜</el-button>
  <el-dialog v-model="openSearch">
    <el-scrollbar height="60vh">
      <el-card
        v-for="{ name, album, artist, id, picUrl } of res"
        :key="id"
        class="m-card"
      >
        {{ name }}
        <el-image :src="picUrl" alt="专辑图" />
        <el-descriptions :title="name" style="width: 600px">
          <el-descriptions-item label="专辑">{{ album }}</el-descriptions-item>
          <el-descriptions-item label="歌手">{{ artist }}</el-descriptions-item>
        </el-descriptions>
        <div style="width: 100%">
          <el-button type="primary" @click="play(id)">播放</el-button>
        </div>
      </el-card>
    </el-scrollbar>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";
import { searchMusic } from "../apis/querySearch";
import { Music } from "../apis/Music";
import { ElMessage } from "element-plus";

const props = defineProps({
  keyword: { type: String, required: true },
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
};
watchEffect(async () => {
  props.keyword && (res.value = await searchMusic(props.keyword));
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
