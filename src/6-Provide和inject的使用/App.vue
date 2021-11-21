<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script type="text/javascript">
import Home from "./Home.vue";
import { computed } from "vue";

export default {
  name: "App",
  /**
   * 父组件： 有一个provide选项来提供数据
   * 子组件： 有一个inject选项来开始使用这些数据
   */
  // 对象的提供者
  // provide: {
  //   name: 'chen',
  //   age: 23,
  // },
  provide() {
    return {
      name: "chen",
      age: 23,
      // 如果有引用data里面的数据，需要将provide写成函数形式返回
      // length: this.names.length,
      length: computed(() => this.names.length), //改为响应式
    };
  },
  data() {
    return {
      names: ["abc", "dfb", "dfdr"],
    };
  },
  components: {
    Home,
  },
  methods: {
    addName() {
      this.names.push("cen"); //  这里provide里面的name是不会改变的，需要将其改为响应式的
      console.log(this.names);
    },
  },
};
</script>

<style scoped>
</style>
