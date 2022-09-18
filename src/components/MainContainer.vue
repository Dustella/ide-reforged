<template>
  <el-row>
    <el-col :span="6" :xs="0" />
    <el-col :span="12" :xs="24">
      <el-card>
        <div class="content">
          <slot />
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" :xs="0" />
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
