<template>
  <div class="header">
    <h1 class="header__title">Meal to List</h1>
    <h3 class="header__subtitle">Create a grocery list from a selection of saved meals</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";

.header {
  align-items: center;
  background: $md-orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}

.header__title {
  color: $md-brown;
  font-size: $xl-size;
  font-weight: 700;
  margin: 0;
}

.header__subtitle {
  color: $off-white;
  font-size: $m-size;
  font-weight: 700;
  margin-top: 0;
}
</style>

