<template>
  <div class="itemlist">
    <h1 class="itemlist__header">{{ groceryName || "New Grocery List" }}</h1>
    <ul class="itemlist__body" :class=" {'itemlist__body--border': itemList.length > 0}">
      <app-grocery-item class="itemlist__item" v-for="item in itemList" :key="item.name" :item="item"></app-grocery-item>
    </ul>
  </div>
</template>


<script>
import { mealBus, groceryBus } from "./../../main";
import GroceryItem from "./GroceryItem.vue";
export default {
  components: {
    "app-grocery-item": GroceryItem
  },
  data: function() {
    return {
      itemList: [],
      groceryName: ""
    };
  },
  created() {
    mealBus.$on("mealAdded", itemList => {
      this.itemList = itemList;
    });
    groceryBus.$on("groceryNamed", name => {
      this.groceryName = name;
    });
  },
  watch: {
    groceryName() {
      if (this.groceryName === "") {
        this.itemList = [];
      }
    }
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
    margin: 0 0 0 $s-size;
  }
}
</style>
