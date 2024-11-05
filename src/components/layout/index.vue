<template>
  <div class="app">
    <div class="leftV">
      <div class="left">
        <LeftSidebar/>
      </div>
    </div>
    <div class="data">
      <div class="top">
        <div class="topV">
          <topView/>
        </div>
      </div>
      <div class="dataV">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftSidebar from '@/components/layout/LeftSidebar.vue'
import topView from '@/components/layout/topView.vue'



</script>

<style scoped>
.app{
  border: 1px solid red;
  width: 99%;
  height: 99vh;
  min-width: 1100px;
  margin: 4px;
  display: flex;

  .leftV{
    display: flex;
    width: 220px;
    height: 100%;
    border: 1px solid red;
    align-items: center;
    .left{
      border: 1px solid red;
      width: 220px;
      height: 85%;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
    }
  }

  .data{
    border: 1px solid red;
    width: calc(100% - 220px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
      display: flex;
      align-items: center;
      border: 1px solid red;
      width: 100%;
      height: 50px;
      justify-content: center;
      background: rgba(190, 190, 197, 0.5);
      .topV{
        border: 1px solid red;
        width: 800px;
        height: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
    }
    .dataV{
      display: flex;
      flex-direction: column;
      border: 1px solid red;
      width: calc(100%);
      height: 100%;
    }
  }
}
</style>