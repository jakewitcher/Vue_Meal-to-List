<template>
  <div class="meal">
    <app-meal-form :saveMeal="saveMeal"></app-meal-form>
    <app-meal-items></app-meal-items>
  </div>
</template>

<script>
import { groceryBus } from "./../../main.js";
import MealForm from "./MealForm.vue";
import MealItems from "./MealItems.vue";
export default {
  data: function() {
    return {
      meals: []
    };
  },
  components: {
    "app-meal-form": MealForm,
    "app-meal-items": MealItems
  },
  methods: {
    saveMeal(meal, items) {
      let newMeal = {
        name: meal,
        itemList: items
      };
      this.meals.push(newMeal);
    }
  },
  watch: {
    meals() {
      groceryBus.$emit("mealAdded", this.meals);
    }
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

