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
.meal {
  display: flex;
}
</style>

