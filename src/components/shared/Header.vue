<template>
  <div class="header">
    <h1 class="header__title">Meal to List</h1>
    <hr>
    <h3 class="header__subtitle">Create a grocery list from a selection of saved meals</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";

hr {
  border: 0;
  border-bottom: 1px dashed $light-orange;
  background: $light-orange;
  width: 90%;
}

.header {
  align-items: center;
  background: $md-orange;
  border: 2px solid $light-orange;
  box-shadow: 0 0 5px $md-brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: $s-size;
}

.header__title {
  color: darken($md-brown, 7%);
  font-size: $xl-size;
  font-weight: 700;
  margin: 0;
}

.header__subtitle {
  color: $off-white;
  font-size: $m-size;
  font-weight: 700;
  margin-top: 0;
  padding: 0 $s-size;
}
</style>

