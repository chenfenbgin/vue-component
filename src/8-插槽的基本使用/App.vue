<template>
  <div id="app">
    <my-slot-cpn>
      <button>阿牛</button>
      <my-button></my-button>
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <hr />
    <my-slot-cpn>
      <h2>哈哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script type="text/javascript">
import MySlotCpn from "./MySlotCpn.vue";
import MyButton from "./MyButton.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MySlotCpn,
    MyButton,
  },
};
</script>

<style scoped></style>
