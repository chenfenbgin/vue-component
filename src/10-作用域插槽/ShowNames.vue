<template>
  <div>
    <template v-for="(item, index) of names" :key="item">
      <slot :item="item" :index="index"></slot>
      <!-- <span>{{ item }}</span> -->
    </template>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "ShowNames",
  props: {
    names: {
      type: Array,
      default: () => {
        return [];
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
