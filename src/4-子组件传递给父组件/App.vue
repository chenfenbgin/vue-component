<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
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

<style scoped>
</style>
