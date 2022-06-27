<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script type="text/javascript">
import Home from "./Home.vue";
import { computed } from "vue";
// 对于有模块化的组件来说，这里的this是undefined
// console.log(this); // undefined

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

  // 我们把provide改成函数写法，这里this，在源码中会被绑定到组件实例上
  provide() {
    console.log(this); //组件实例
    return {
      name: "chen",
      age: 23,
      // 如果有引用data里面的数据，需要将provide写成函数形式返回
      // length: this.names.length,

      // 这里this，箭头函数时不绑定的。computed返回的是一个ref对象，需要使用.value
      length: computed(() => this.names.length), //改为响应式(如果names改变了，就可以这么使用)
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

<style scoped></style>
