<template>
  <div id="app">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "CounterOperation",
  // emits第一种写法：数组写法， vue3里面的写法： 注册要触发的事件，子组件需要触发的事件
  // 第1步: 注册事件， vue3中，需要定义会触发那些事件，emits: []
  // emits: ["add", "sub", "addN"],

  // emits第二种写法： 对象写法, 对象写法的目的是为了进行参数的验证
  emits: {
    add: null, //没有参数，空就是不需要验证
    sub: null,
    addN: (num, name, age) => {
      //一个参数写为payload
      if (num > 10) {
        //  大于10才给它传过去,其实都会传过去，只是报一个警告
        return true;
      }
      console.log(num, name, age);
      return false;
    },
  },
  data() {
    return {
      num: 3,
    };
  },
  components: {},
  methods: {
    increment() {
      console.log("+1");
      // 第2步: 触发事件: this.$emit("")
      this.$emit("add");
    },
    decrement() {
      console.log("-1");
      this.$emit("sub");
    },
    incrementN() {
      this.$emit("addN", this.num, "chen", 24);
    },
  },
};
</script>

<style scoped></style>
