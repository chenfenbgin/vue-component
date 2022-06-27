<template>
  <div id="app">
    <child-cpn>
      <!-- 其实哈哈哈哈是渲染到子组件里面的 -->
      <!-- 父级模板中的所有内容： 在父级作用域中编译的 -->
      <!-- 子级模板中的所有内容： 在子级作用域中编译的 -->

      <!-- 父组件中想访问 子组件里面的 title  -->
      <button>{{ title }}</button>
    </child-cpn>

    <show-names :names="names">
      <!-- showNames中的item, 有作用域，这样是娶不到的，需要tempalte -->
      <!-- <button>{{item}}</button> -->

      <!-- 可以取到子组件中的 item index, 相当于传回去;
          slotProps就是自组件赋值的属性， slotProps是可以随便取名字的。
      -->
      <template v-slot="slotProps">
        <button>{{ slotProps.item }} - {{ slotProps.index }}</button>

        <!-- 这里可以该成自己想要的了 -->
        <!-- <h2>{{ slotProps.item }} - {{ slotProps.index }}</h2> -->
        <!-- <strong>{{ slotProps.item }} - {{ slotProps.index }}</strong> -->
      </template>
    </show-names>
  </div>
</template>

<script type="text/javascript">
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";

export default {
  name: "app",
  data() {
    return {
      // 需求，希望将names交给组件来展示。
      names: ["chen", "liu", "shen"],
    };
  },
  components: {
    ChildCpn,
    ShowNames,
  },
};
</script>

<style scoped></style>
