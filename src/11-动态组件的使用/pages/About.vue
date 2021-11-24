<template>
  <div id="app">
    About组件
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "About",
  data() {
    return {
      counter: 0,
    };
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
</style>
