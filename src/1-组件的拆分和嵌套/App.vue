<template>
  <div id="app">
    <!-- header写成大小，为了防止和H5中的标签重复 -->
    <Header></Header>
    <Main></Main>
     <Footer></Footer>
  </div>
</template>

<script>
// import Header from "./Header";
//可以不跟后缀名，vue cli 基于-> webpack -> extensions;
import Header from "./Header.vue";
import Footer from "./Footer";
import Main from "./Main";

export default {
  components: {
    Header,
    Footer,
    Main,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
