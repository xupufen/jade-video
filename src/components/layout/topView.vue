<template>
  <div class="topView">
   <div class="i">
     <input
         :placeholder="placeholder"
         v-model="inp"/>
     <div class="btn">
       <img :src="select" alt=""/>
       <span>搜索</span>
     </div>
   </div>
    <div class="menu">
      <p>下载客户端</p>
      <p>观影记录</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import select from '@/assets/select.svg'

const placeholder = ref('')
const inp=ref('')
</script>

<style scoped lang="scss">
.topView {
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .i{
    box-sizing: border-box;
    width: 390px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 10px;

    &:hover{
      border: 1.5px solid white;
      input:hover{
        border: 1px solid white;
      }
      .btn{
        animation: gradientAnimation 5s ease-in-out infinite;
      }
    }
    input{
      box-sizing: border-box;
      border: 1px solid #eae4e4;
      width: 300px;
      height: 100%;
      border-radius: 10px 0 0 10px;
      padding: 5px;
      font-size: 20px;

      &:hover{
        border: 1px solid white;
      }

      &:focus{
        outline: none;
        border: none;
        padding: 5px;
      }
    }
    .btn{
      display: flex;
      align-items: center;
      width: 90px;
      height: 97%;
      margin-left: 0;
      background: rgba(37, 37, 38,0.3);
      border-radius: 0 10px 10px 0;
      img{
        width: 30px;
        height: 30px;
        margin-left: 5px;
      }
      span{
        margin: 5px;
        color: white;
      }

      &:hover{
        cursor: pointer;
        animation: gradientAnimation 5s ease-in-out infinite;
      }

      @keyframes gradientAnimation {
        0% {
          background: linear-gradient(to right, rgb(0, 169, 220), #00B84D);
        }
        50% {
          background: linear-gradient(to right, #00B84D, rgb(0, 169, 220));
        }
        100% {
          background: linear-gradient(to right, rgb(0, 169, 220), #00B84D);
        }
      }
    }
  }

  .menu{
    border: 1px solid red;
    width: 200px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    height: 100%;
    p{
      margin: 5px;
    }
  }
}
</style>