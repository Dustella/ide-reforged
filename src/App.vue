<template>
  <main-container>
    <h1 style="text-align: center">IDE Reforged</h1>
    <!-- todo: There should be a better logo-->
    <div class="row">
      <el-input v-model="keyword" placeholder="输入搜索的音乐" />
      <dialog-search :keyword="keyword" />
      <dialog-rank />
    </div>
    <vue3-video-play v-bind="options" />
  </main-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import MainContainer from "./components/container.vue";
import dialogSearch from "./components/dialogSearch.vue";
import DialogRank from "./components/dialogRank.vue";

const keyword = ref("海阔天空");
const options = reactive({
  width: "100%", //播放器高度
  height: "65vh", //播放器高度
  src: "https://s2-cdn.dustella.net/ide_full_min.mp4", //视频源
  muted: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "fullScreen",
  ], //显示所有按钮,
});
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > * {
    margin: 0 10px 0 10px;
  }
}
:deep(.el-input__inner) {
  height: 100px;
}
</style>
