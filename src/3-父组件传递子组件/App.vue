<template>
  <div id="app">
    <!-- 这里可以传递多个 -->
    <!-- 这里传的非props的属性，会被添加到子组件的根节点上（在有根组件的前提下继承） -->
    <show-message
      class="chen"
      id="idchen"
      title="哈哈哈"
      content="我是哈哈哈"
    ></show-message>
    <show-message title="嘻嘻嘻" content="我是嘻嘻嘻"></show-message>
    <show-message :title="title" :content="content"></show-message>

    <!-- 可以有两种方式:
        一种就是messsage.title; 
        另一种就是v-bind='对象'
    -->

    <!-- 方式一 -->
    <show-message
      :title="message.title"
      :content="message.content"
    ></show-message>

    <!-- 方式二, 传递的是一个对象 -->
    <show-message v-bind="message"></show-message>
  </div>
</template>

<script type="text/javascript">
import ShowMessage from "./ShowMessage.vue";

export default {
  data() {
    return {
      title: "嘻嘻嘻",
      content: "嘻嘻嘻",
      message: {
        title: "嘿嘿嘿",
        content: "我是嘿嘿嘿",
      },
    };
  },
  components: {
    ShowMessage,
  },
};
</script>

<style scoped></style>
