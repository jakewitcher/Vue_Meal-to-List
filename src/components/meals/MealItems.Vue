<template>
  <div class="itemlist">
    <h1 class="itemlist__header">{{ mealName || "New Meal" }}</h1>
    <ul class="itemlist__body" :class=" {'itemlist__body--border': itemList.length > 0}">
      <app-meal-item class="itemlist__item" v-for="item in itemList" :key="item.name" :item="item"></app-meal-item>
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
@import "./../../../styles/settings.scss";
.itemlist {
  background: $off-white;
  box-shadow: 0 0 5px lighten($md-brown, 20%);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: $s-size 0;
}
.itemlist__header {
  color: $md-brown;
  font-size: $ml-size;
  margin: 0;
  padding: $s-size $l-size;
}

.itemlist__body {
  margin: $s-size;
  padding: 0;
}

.itemlist__body--border {
  border: 1px solid $md-brown;
}

.itemlist__item {
  background: $white;
  // border: 1px solid $md-brown;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: $md-brown;
  display: flex;
  font-size: $s-size;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

@media (min-width: $tablet-breakpoint) {
  .itemlist {
    margin: $s-size 0 $s-size $s-size;
  }
}
</style>
