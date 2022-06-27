<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script type="text/javascript">
import emitter from "./utils/eventbus";

export default {
  name: "About",
  data() {
    return {};
  },
  components: {},
  methods: {
    // about组件中发生一个事件，HomeContent组件中进行监听
    btnClick() {
      console.log("about按钮的点击");
      emitter.emit("chen", { name: "chen", age: 123 });
    },
  },
};
</script>

<style scoped></style>
