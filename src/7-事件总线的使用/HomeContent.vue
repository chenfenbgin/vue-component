<template>
  <div></div>
</template>

<script type="text/javascript">
import emitter from "./utils/eventbus";

export default {
  name: "HomeContent",

  data() {
    return {};
  },
  components: {},
  created() {
    // 监听
    emitter.on("chen", (info) => {
      console.log(info);
    });

    emitter.on("tian", (info) => {
      console.log(info);
    });

    // 监听所有事件
    emitter.on("*", (type, info) => {
      console.log("* listener", type, info);
    });
  },
};
</script>

<style scoped>
</style>
