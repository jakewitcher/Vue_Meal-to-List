<template>
  <div class="meal">
    <app-meal-form></app-meal-form>
    <app-meal-items></app-meal-items>
  </div>
</template>

<script>
import MealForm from "./MealForm.vue";
import MealItems from "./MealItems.vue";
export default {
  components: {
    "app-meal-form": MealForm,
    "app-meal-items": MealItems
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";

.meal {
  display: flex;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@media (min-width: $tablet-breakpoint) {
  .meal {
    flex-direction: row;
  }
}
</style>

