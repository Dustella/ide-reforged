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

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import MainContainer from "@/components/container.vue";
import dialogSearch from "@/components/dialogSearch.vue";
import DialogRank from "./components/dialogRank.vue";

export default defineComponent({
  name: "App",
  components: {
    MainContainer,
    dialogSearch,
    DialogRank,
  },
  data() {
    return {
      keyword: "海阔天空",
      options: reactive({
        width: "100%", //播放器高度
        height: "65vh", //播放器高度
        color: "#409eff", //主题色
        title: "", //视频名称
        src: "https://s2-cdn.dustella.net/ide_full_min.mp4", //视频源
        muted: false, //静音
        webFullScreen: false,
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
          "pageFullScreen",
          "fullScreen",
        ], //显示所有按钮,
      }),
    };
  },
  mounted() {
    axios
      .get("https://api.ide.dustella.net/getRank")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
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
