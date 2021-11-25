<template>
  <div id="app">
    <button @click="isShow = !isShow">切换</button>
    <!-- v-if为DOM的时候，这个元素根本就不会存在与DOM元素里面，会被删除掉 -->
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script type="text/javascript">
import Home from "./Home.vue";
export default {
  name: "app",
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Home,
  },
};
</script>

<style scoped>
</style>
