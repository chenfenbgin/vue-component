<template>
  <div>HomeContent： {{ name }}-{{ age }} - {{ length }}</div>
</template>

<script type="text/javascript">
export default {
  name: "HomeContent",
  // 将App.vue中provide的属性进行注入
  inject: ["name", "age", "length"],

  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
</style>
