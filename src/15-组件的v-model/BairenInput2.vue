<template>
  <div id="app">
    <input v-model="value" />
    <input v-model="chentitle" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BairenInput2",
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    chentitle: {
      set(title) {
        this.$emit("update:title", title);
      },
      get() {
        return this.title;
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
