<template>
  <div id="app">
    <nav-bar :name="name">
      <!-- 这样写的话每个插槽都有三份，一共九份，所以要使用插槽-->
      <!-- 左边的插槽 -->
      <!-- <button>左边的按钮</button> -->

      <!-- 分配给左边的插槽 -->
      <!-- 这里的v-slot：left, 可以直接写成 # -->
      <!-- <template v-slot:left> -->
      <template #left>
        <button>左边的按钮</button>
      </template>

      <!-- 中间的插槽 -->
      <template #center>
        <h2>我是标题</h2>
      </template>

      <!-- 右边的插槽 -->
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>

      <!-- 动态具名插槽 -->
      <!-- 如果直接写v-slot:name, 这里的name是不会去取data中的name值的 -->
      <!-- <template v-slot:[name]> -->
      <template v-slot:[name]>
        <i>chen内容</i>
      </template>

      <!-- 具名插槽的缩写, v-slot可以改为#-->
      <template #right1>
        <i>hhh </i>
      </template>
    </nav-bar>
  </div>
</template>

<script type="text/javascript">
import NavBar from "./NavBar.vue";

export default {
  name: "app",

  data() {
    return {
      name: "chen",
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>
