<template>
  <div class="groceryform">
    <h2 class="groceryform__header">Create a New Grocery List</h2>
    <div class="groceryform__form">
        <div class="groceryform__nameinputfield">
          <p>Grocery List Name</p>
          <input class="groceryform__nameinputfield--input" type="text" v-model.lazy="groceryName">
        </div>
        <div class="groceryform__iteminputfields">
          <div>
            <p>Meals</p>
            <select class="groceryform__iteminputfields--input groceryform__iteminputfields--dropdown"
                    name="selectedMeal"
                    v-model="selectedMeal"
                    v-for="meal in mealList"
                    :key="meal.name"
                    required>
              <option :value="meal">{{ meal.name }}</option>
            </select>
          </div>
          <div class="groceryform__button">
            <button class="groceryform__button--add" @click="addMeal(selectedMeal)">Add Meal</button>
          </div>
        </div>
        <div>
          <button class="groceryform__button--save" @click="saveGrocery(groceryName, selectedMeals, itemList); resetMeals();">Save Grocery List</button>
        </div>
    </div>

  </div>
</template>

<script>
import { mealBus, groceryBus } from "./../../main";
export default {
  props: {
    saveGrocery: Function
  },
  data: function() {
    return {
      groceryName: "",
      mealList: [],
      itemList: [],
      selectedMeal: null,
      selectedMeals: []
    };
  },
  methods: {
    resetMeals() {
      this.mealName = "";
      this.selectedMeals = [];
    },
    addMeal() {
      this.selectedMeals.push(this.selectedMeal);
      this.mealAdded();
    },
    mealAdded() {
      mealBus.$emit("mealAdded", this.selectedMeals);
    }
  },
  created() {
    groceryBus.$on("mealAdded", meals => {
      this.mealList = meals;
    });
  },
  watch: {
    groceryName() {
      groceryBus.$emit("groceryNamed", this.groceryName);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../styles/settings.scss";

button {
  border: none;
  border-radius: 3px;
  padding: 5px;
}

.groceryform {
  background: $off-white;
  box-shadow: 0 0 5px lighten($md-brown, 20%);
  margin: $s-size 0;
}

.groceryform__form {
  padding: $s-size;
}

.groceryform__button {
  display: flex;
  margin-top: $s-size;
}

.groceryform__button--save {
  background: $light-blue;
  border: 1px solid darken($light-blue, 15%);
  color: $white;
  width: 100%;
}

.groceryform__button--add {
  background: lighten($md-orange, 15%);
  border: 1px solid $md-orange;
  color: $md-brown;
}

.groceryform__header {
  color: $md-brown;
  font-size: $ml-size;
  margin: 0;
  padding: $s-size $l-size;
}

.groceryform__iteminputfields {
  border: 1px solid $md-brown;
  color: $md-brown;
  display: flex;
  flex-direction: column;
  font-size: $s-size;
  margin: $s-size 0;
  padding: $s-size;
}

.groceryform__iteminputfields--input {
  border: 1px solid $md-brown;
  color: $md-brown;
  height: $m-size;
  width: 100%;
}

.groceryform__iteminputfields--input:focus {
  border: 1px solid $md-orange;
  box-shadow: 0 0 2px $off-white;
  outline: none;
}

.groceryform__iteminputfields--dropdown {
  height: $ml-size;
}

.groceryform__nameinputfield {
  color: $md-brown;
  display: flex;
  flex-direction: column;
  font-size: $s-size;
  padding: 0;
}

.groceryform__nameinputfield--input {
  border: 1px solid $md-brown;
  color: $md-brown;
  height: $m-size;
}

.groceryform__nameinputfield--input:focus {
  border: 1px solid $md-orange;
  box-shadow: 0 0 2px $off-white;
  outline: none;
}
</style>
