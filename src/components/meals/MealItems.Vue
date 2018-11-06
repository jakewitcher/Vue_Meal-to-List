<template>
  <div>
    <h1 class="mealname">{{ mealName || "New Meal" }}</h1>
    <ul>
      <app-meal-item v-for="item in itemList" :key="item.name" :item="item"></app-meal-item>
    </ul>

  </div>
</template>


<script>
import { itemBus, mealBus } from "./../../main";
import MealItem from "./MealItem.vue";
export default {
  components: {
    "app-meal-item": MealItem
  },
  data: function() {
    return {
      itemList: [],
      mealName: ""
    };
  },
  created() {
    itemBus.$on("itemAdded", items => {
      this.itemList = items;
    });
    mealBus.$on("mealNamed", name => {
      this.mealName = name;
    });
  }
};
</script>

<style lang="scss" scoped>
.mealname {
  display: flex;
  flex-grow: 1;
}
</style>
