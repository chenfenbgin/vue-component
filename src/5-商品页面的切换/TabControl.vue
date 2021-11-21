<template>
  <div class="tab-control">
    <div
      :class="{ active: currentIndex === index }"
      class="tab-control-item"
      v-for="(item, index) of titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span> {{ item }} </span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TabControl",
  emits: ["titleClick"],
  props: {
    titles: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.tab-control-item.active {
  color: red;
}

.tab-control-item.active span {
  border-bottom: 5px solid red;
  padding: 5px 5px;
}
</style>
