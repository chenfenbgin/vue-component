<template>
  <div id="app">
     <h2>组件开始</h2>
     <!-- 由使用者决定它是什么， 插槽里面也是可以插入组件的-->
     <slot>
       <!-- 就是如果有插入东西的话，这是不会显示的，没有东西才会显示 -->
       <i>我是默认的i元素</i>
     </slot>
     <h2>组件结束</h2>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "MySlotCpn",
  data() {
    return {

    }
  },
  components: {
    
  }
}
</script>

<style scoped>

</style>
