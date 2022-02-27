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

<style lang="scss">
.content {
  margin-top: 5vh;
  & > * {
    margin: 2vh auto;
  }
}
</style>
