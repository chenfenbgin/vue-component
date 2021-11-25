<template>
  <div id="app">
    <!-- 1.默认绑定和事件处理 -->
    <!-- <button @click="btnClick">BairenInput按钮</button>
    <h2>BairemInput的message: {{ modelValue }}</h2>
     -->

    <!-- 2.通过input事件触发 -->
    <!-- <input :value="modelValue" @input="btnClick" /> -->

    <!-- 3.通过input事件触发 -->
    <!-- <input v-model="modelValue" /> -->

    <!-- 4.通过计算属性来实现 -->
    <input v-model="value" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BairenInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  methods: {
    btnClick() {
      // this.$emit("update:modelValue", "12q345");
      this.$emit("update:modelValue", event.target.value);
      console.log();
    },
  },
  conputed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
</style>
