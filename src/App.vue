<template>
  <main-container>
    <h1 style="text-align: center">IDE Reforged</h1>
    <!-- todo: There should be a better logo-->
    <div class="row">
      <el-input v-model="keyword" placeholder="输入搜索的音乐" />
      <dialog-search :keyword="keyword" @play="play" />
      <dialog-rank />
    </div>
    <vue3-video-play
      v-bind="options"
      @play="isplaying"
      @pause="pause"
      @timeupdate="updateDuration"
    />
    <audio :src="src" loop id="au"></audio>
  </main-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import MainContainer from "./components/container.vue";
import dialogSearch from "./components/dialogSearch.vue";
import DialogRank from "./components/dialogRank.vue";
import getUrl from "./apis/getUrl";
import { ElMessage } from "element-plus";

const keyword = ref("");
const src = ref("");

const play = (id: number) => {
  getUrl(id).then((url) => {
    src.value = url;
    ElMessage({
      message: "音乐已经成功装载！",
      type: "success",
    });
  });
};

const options = reactive({
  width: "100%",
  height: "65vh",
  src: "https://s2-cdn.dustella.net/ide_full_min.mp4",
  muted: false,
});

const auPlayer = (): HTMLAudioElement => {
  return document.getElementById("au") as HTMLAudioElement;
};

const isplaying = () => {
  auPlayer().play();
};

const pause = () => {
  auPlayer().pause();
};

const updateDuration = () => {};
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > * {
    margin-right: 10px;
  }
}
:deep(.el-input__inner) {
  height: 100px;
}
</style>
