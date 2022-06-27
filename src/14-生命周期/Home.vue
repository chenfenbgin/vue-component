<template>
  <div id="app">
    <!-- Home -->
    <h2 ref="msg">{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Home",
  data() {
    return {
      message: "白人 ",
    };
  },
  components: {},
  methods: {
    changeMessage() {
      this.message = "你好呀， 我是陈先生";
    },
  },
  beforeCreate() {
    console.log("home组件实例创建之前调用");
  },
  created() {
    console.log("home组件实例创建完成了");
  },
  beforeMount() {
    console.log("home组件挂载之前调用");
  },
  mounted() {
    console.log("home组件挂载完成调用");
  },
  beforeUnmount() {
    console.log("home组件卸掉掉之前调用");
  },
  unmounted() {
    console.log("home卸载完");
  },
  beforeUpdate() {
    // DOM更新前后拿到的数据都是不一样的
    console.log("message", this.$refs.msg.innerHTML);
    console.log("home组件DOM更新之前调用");
  },
  updated() {
    console.log("message", this.$refs.msg.innerHTML);
    console.log("home组件DOM更新完成之后");
  },
};
</script>

<style scoped></style>
