<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
        <div class="addtition">
      <!-- <slot v-bind:name="name"></slot> -->
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "NavBar",
  props: {
    name: String,
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left,
.right {
  width: 80px;
}

.left,
.right,
.center {
  height: 44px;
  background-color: red;
}

.center {
  /* flex 就是除了left，right后占据剩余的 */
  flex: 1;
  background-color: blue;
}
</style>
