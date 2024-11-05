<template>
  <div class="leftView">
    <div class="obj" v-for="(item,index) in 50" :key="index">
      <div class="i">
        <img src="" alt=""/>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.leftView{
  width: 100%;
  height: 100%;
  filter: blur(0.7px);
  backdrop-filter: blur(2px);
  overflow-y: scroll;
  scrollbar-width: none;
  box-sizing: border-box;
  padding: 10px 0;
  .obj{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    width: 100%;
    height: 40px;
    .i{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid red;
      width: 80%;
      height: 80%;
    }
  }
}
</style>