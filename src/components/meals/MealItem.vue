<template>
  <li>
    <p>{{ item.name }}</p>
    <p>{{ item.amount }}</p>
    <p>{{ item.unit }}</p>
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
</style>

