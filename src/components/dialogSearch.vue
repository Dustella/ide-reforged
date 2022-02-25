<template>
  <el-button type="primary" @click="openSearch = true">开始</el-button>
  <el-dialog v-model="openSearch">
    <el-card v-for="i in 4" :key="i.toString">
      <el-image alt="专辑图" />
      {{ i }}

      <el-descriptions :title="i">
        <el-descriptions-item label="Username"
          >kooriookami</el-descriptions-item
        >
        <el-descriptions-item label="Telephone"
          >18100000000</el-descriptions-item
        >
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "dialogSearch",
  props: { keyword: String },
  data() {
    return {
      openSearch: true,
      resultIds: [] as number[],
      i: [],
    };
  },
  methods: {
    // getDetails(ids: number[]): music {
    //   axios.get(`https://api2.163.dustella.net/song/detail?ids=`);
    // },
  },
  mounted() {
    console.log("");
  },
});
</script>

<style scoped>
</style>
