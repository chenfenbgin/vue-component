<template>
  <div id="app">
    <!-- 1.input绑定和事件处理 -->
    <!-- 在input标签上使用v-model, 做了两件事情，v-bind 和 @input -->
    <!-- <input v-model="message" /> -->
    <!-- <input :value="message" @input="message = $event.target.value" /> -->

    <!-- 在组件上使用v-model， 如果只写 v-model,相当于下面绑定了一个modelValue属性和一个事件@update:model-value -->
    <!-- <bairen-input2 v-model="message"></bairen-input2> -->
    <!-- 就是下面这两件事情 -->
    <bairen-input2
      :modelValue="message"
      @update:model-value="message = $event"
    ></bairen-input2>

    <!-- 绑定两个v-model -->
    <!-- v-model是可以传递参数的，直接在后面:加，会传递给props -->
    <bairen-input2 v-model="message" v-model:title="title"></bairen-input2>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>

    <!-- 等价于上面的写法👆, 我们需要在BairenInput定义这么一个属性 -->
    <!-- <bairen-input :modelValue="message" @update:model-value="message = $eventg"></bairen-input> -->
  </div>
</template>

<script type="text/javascript">
import BairenInput2 from "./BairenInput2.vue";
export default {
  name: "app",
  data() {
    return {
      message: "hello world",
      title: "hhhhhh",
    };
  },
  components: {
    BairenInput2,
  },
};
</script>

<style scoped></style>
