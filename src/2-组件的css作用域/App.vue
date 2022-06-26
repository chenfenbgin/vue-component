<template>
  <h2 class="title">APP</h2>
  <!-- 我们会发现这两个东西都是红色 -->
  <hello></hello>
</template>

<script type="text/javascript">
import Hello from "./Hello.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Hello,
  },
};
</script>

<style scoped>
/* scoped作用域的作用： 是为了防止组件之间的样式相互污染
   但是会发生hello组件也会变成红色，它默认是会给根元素增加上一个十六进制的属性的，我们需要在hello组件中给他包裹一层根元素
*/
h2 {
  color: red;
}

.title {
  color: blue;
}
</style>
