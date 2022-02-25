<template>
  <el-row>
    <el-col :span="6" />
    <el-col :span="12">
      <el-card>
        <div class="content">
          <slot> </slot>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-container",
});
</script>

<style lang="scss">
.content {
  margin-top: 5vh;
  & > * {
    margin: 2vh auto;
  }
}
</style>
