<template>
  <div id="app">
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
    <h2>{{ content[currentIndex] }}</h2>
  </div>
</template>

<script type="text/javascript">
import TabControl from "./TabControl.vue";

export default {
  name: "app",
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      content: ["衣服页面", "鞋子页面", "裤子页面"],
      currentIndex: 0,
    };
  },
  components: {
    TabControl,
  },
  methods: {
    titleClick(index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
</style>
