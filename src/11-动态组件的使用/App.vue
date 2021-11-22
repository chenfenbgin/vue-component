<template>
  <div id="app">
    <!-- 案例： 点击一个tab-bar, 切换不同的组件显示
          方式一： 通过 v-if 来判断
          方式二： 动态组件的方式
          方式三： 路由的方式
      -->

    <button
      v-for="item of tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab == item }"
    >
      {{ item }}
    </button>

    
    <!-- 方式二：动态组件来实现： 是使用component组件， 通过一个特殊的attribute is 来实现 -->
    <component :is="currentTab">

    </component>



    <!-- 方式一： v-if判断来实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->
  </div>
</template>

<script type="text/javascript">
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";
export default {
  name: "app",
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
      currentTabIndex: 0,
    };
  },
  components: {
    Home,
    About,
    Category,
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
