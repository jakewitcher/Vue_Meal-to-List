<template>
  <div class="grocery">
     <app-grocery-form :saveGrocery="saveGrocery"></app-grocery-form>
    <app-grocery-items></app-grocery-items>
  </div>
</template>

<script>
import GroceryForm from "./GroceryForm.vue";
import GroceryItems from "./GroceryItems.vue";
export default {
  data: function() {
    return {
      groceries: []
    };
  },
  components: {
    "app-grocery-form": GroceryForm,
    "app-grocery-items": GroceryItems
  },
  methods: {
    saveGrocery(name, items) {
      let newGrocery = {
        name,
        items
      };
      this.groceries.push(newGrocery);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";

.grocery {
  display: flex;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@media (min-width: $tablet-breakpoint) {
  .grocery {
    flex-direction: row;
  }
}
</style>
