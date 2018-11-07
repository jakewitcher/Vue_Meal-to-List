<template>
  <li>
    <div class="item">
      <p>{{ item.name }}</p>
    </div>
    <div class="item">
      <p>{{ item.amount }}</p>
    </div>
    <div class="item">
      <p>{{ item.unit }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";
.item {
  display: flex;
  justify-content: flex-start;
}
</style>

