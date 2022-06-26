<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
    <!-- emtis第三步：监听事件,使用的是v-on对事件监听，@add='要操作的函数' -->
    <counter-operation
      @add="increment"
      @sub="decrement"
      @addN="incrementN"
    ></counter-operation>
  </div>
</template>

<script type="text/javascript">
import CounterOperation from "./CounterOperatin.vue";

export default {
  name: "app",
  data() {
    return {
      counter: 100,
    };
  },
  components: {
    CounterOperation,
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    incrementN(num, name, age) {
      console.log(name, age);
      this.counter += num;
    },
  },
};
</script>

<style scoped></style>
