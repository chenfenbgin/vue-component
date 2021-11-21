<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script type="text/javascript">
import Home from "./Home.vue";
import About from "./About.vue";
export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    Home,
    About,
  },
  methods: {},
};
</script>

<style scoped>
</style>
