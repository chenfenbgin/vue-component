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
    // 监听chen事件，可以把chen抽到constants.js常量中
    // 两个参数，监听的事件 和 要执行的回调函数
    emitter.on("chen", (info) => {
      console.log(info);
    });

    emitter.on("tian", (info) => {
      console.log(info);
    });

    // 监听所有事件， 传递过来的参数是事件的类型type 和 传递过来的数据info
    emitter.on("*", (type, info) => {
      console.log("* listener", type, info);
    });
  },
};
</script>

<style scoped>
</style>
