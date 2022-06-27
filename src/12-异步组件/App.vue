<template>
  <div>
    App组件
    <home></home>

    <!-- 显示异步组件可能显示比较慢，需要默认组件占位 -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import Home from "./Home.vue";
import Loading from "./Loading.vue";

// import AsyncCategory from './AsyncCategory.vue';

// defineAsyncComponent 中箭头函数要求我们返回一个Promise，这样打包就会别打包到单独的文件了
// 这样，当我们需要显示这个异步组件的时候，他在去请求服务器，把文件下载下来，执行对应的代码
// AsyncCategory就变成一个异步组件了。其实是利用了webpack特性，在vue中使用，把组件进行分包的过程
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));

// const AsyncCategory = defineAsyncComponent({
//   loader: () => import("./AsyncCategory.vue"),
//   // 就是AsyncCategory组件如果还没下载下来，就使用Loading组件进行占位
//   loadingComponent: Loading,
//   // errorComponent,
//   // 在显示loadingComponent组件之前, 等待多长时间
//   delay: 2000,
//   /**
//    * err: 错误信息,
//    * retry: 函数, 调用retry尝试重新加载
//    * attempts: 记录尝试的次数
//    */
//   onError: function(err, retry, attempts) {

//   }
// })

export default {
  components: {
    Home,
    // AsyncCategory就变成一个异步组件了
    AsyncCategory,
    Loading,
  },
};
</script>

<style scoped></style>
