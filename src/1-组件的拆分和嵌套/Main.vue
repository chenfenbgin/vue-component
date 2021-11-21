<template>
  <div class="main">
    <main-banner></main-banner>
    <main-product-list></main-product-list>
  </div>
</template>

<script type="text/javascript">
import MainBanner from "./MainBanner.vue";
import MainProductList from "./MainProductList.vue";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    MainProductList,
    MainBanner,
  },
};
</script>

<style scoped>
</style>
