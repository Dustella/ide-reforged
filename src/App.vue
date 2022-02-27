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
      id="vi"
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
const isLoaded = ref(false);

const play = (id: number) => {
  getUrl(id).then((url) => {
    src.value = url;
    isLoaded.value = true;
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

const vPlayer = (): HTMLVideoElement => {
  return document.getElementById("vi") as HTMLVideoElement;
};

const isplaying = () => {
  const time = vPlayer().currentTime;
  if (time > 135) {
    vPlayer().muted = true;
    auPlayer().play();
  }
  if (!isLoaded.value) {
    ElMessage({
      message: "注意！没有替换bgm！会播放官方bgm版本",
      type: "warning",
    });
  }
};

const pause = () => {
  auPlayer().pause();
};

const updateDuration = () => {
  const time = vPlayer().currentTime;
  if (time > 135) {
    console.log(time);
    console.log(auPlayer().src);
    if (isLoaded.value) {
      vPlayer().muted = true;
      auPlayer().play();
    }
  } else {
    pause();
  }
};
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
