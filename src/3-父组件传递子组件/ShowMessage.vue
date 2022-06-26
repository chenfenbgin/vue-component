<template>
  <!-- 父组件传递过来的非props属性 -->
  <!-- <div class="chen"> -->
  <div>
    <!-- 父组件传递过来的title 和 content -->
    <!-- <h2>{{ title }}</h2> -->

    <!-- 从非props取出class只给h2标签 -->
    <!-- <h2 :class="$attrs.class">{{ title }}</h2> -->

    <!-- 如果这里也有id，class属性的话，可以直接使用v-bind  -->
    <h2 :="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "ShowMessage",
  inheritAttrs: false, //不希望组件的根元素继承attribute
  /**
   * 父组件之间通信
   *    Props: 是你可以在组件上注册一些自定义的 attribute
   *    父组件给这些 attribute赋值，子组件通过attribute 的名称获取对应的值
   *
   *  用法：
   *    方式一： 字符串数组
   *    方式二： 对象数组
   */

  // 父传子方式一： 数组
  // props: ["title", "content"],

  // 父传子方式二： 对象
  props: {
    title: String,
    content: {
      type: String, //类型:   String Number Boolean Array Object Date Function Symbol
      required: true, //必传
      default: "2134", // 默认值
    },
    message: [String, Number], //多个可能的类型,

    messageObject: {
      type: Object,
      // 对象或者数组必须从一个工厂函数获取， 因为使用多个组件，其中一个把值改了，那就不是我们要的效果了
      default() {
        return {
          messageObject: "hello messageObject",
        };
      },
    },

    //自定义验证函数
    validatorFunction: {
      validator(value) {
        return ["success", "warning", "danger"].includes(value);
      },
    },

    // 具有默认值的函数
    propG: {
      type: Function,
      default() {
        return "Default function";
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
