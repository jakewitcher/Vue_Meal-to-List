<template>
  <div class="mealform">
    <h2 class="mealform__header">Create a New Meal</h2>
    <div class="mealform__form">
        <div class="mealform__nameinputfield">
          <p>Meal Name</p>
          <input class="mealform__nameinputfield--input" type="text" v-model.lazy="mealName">
        </div>
        <div class="mealform__iteminputfields">
          <div>
            <p>Item</p>
            <input class="mealform__iteminputfields--input" type="text" v-model="itemName">
          </div>

          <div>
            <p>Amount</p>
            <input class="mealform__iteminputfields--input" type="number" v-model="amount">
          </div>

          <div>
            <p>Unit</p>
            <select class="mealform__iteminputfields--input mealform__iteminputfields--dropdown" name="unit" v-model="unit">
              <option value="pound(s)">pound(s)</option>
              <option value="ounce(s)">ounce(s)</option>
              <option value="gallon(s)">gallons</option>
              <option value="quart(s)">quart(s)</option>
              <option value="pint(s)">pint(s)</option>
              <option value="item(s)">item(s)</option>
              <option value="bag(s)">bag(s)</option>
              <option value="box(es)">box(es)</option>
              <option value="container(s)">container(s)</option>
            </select>
          </div>
          <div class="mealform__button">
            <button class="mealform__button--add" @click="addItem">Add Item</button>
          </div>
        </div>
        <div>
          <button class="mealform__button--save">Save Meal</button>
        </div>
    </div>

  </div>
</template>

<script>
import { itemBus, mealBus } from "./../../main";
export default {
  data: function() {
    return {
      mealName: "",
      itemName: "",
      amount: null,
      unit: "",
      itemList: []
    };
  },
  methods: {
    itemAdded() {
      itemBus.$emit("itemAdded", this.itemList);
    },
    resetItemInput() {
      this.itemName = "";
      this.amount = null;
      this.unit = "";
    },
    addItem() {
      let newItem = {
        name: this.itemName,
        amount: this.amount,
        unit: this.unit
      };
      this.itemList.push(newItem);
      this.itemAdded();
      this.resetItemInput();
    }
  },
  watch: {
    mealName() {
      mealBus.$emit("mealNamed", this.mealName);
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

.mealform {
  background: $off-white;
  box-shadow: 0 0 5px lighten($md-brown, 20%);
  margin: $s-size 0;
}

.mealform__form {
  padding: $s-size;
}

.mealform__button {
  display: flex;
  margin-top: $s-size;
}

.mealform__button--save {
  background: $light-blue;
  border: 1px solid darken($light-blue, 15%);
  color: $white;
  width: 100%;
}

.mealform__button--add {
  background: lighten($md-orange, 15%);
  border: 1px solid $md-orange;
  color: $md-brown;
}

.mealform__header {
  color: $md-brown;
  font-size: $ml-size;
  margin: 0;
  padding: $s-size $l-size;
}

.mealform__iteminputfields {
  border: 1px solid $md-brown;
  color: $md-brown;
  display: flex;
  flex-direction: column;
  font-size: $s-size;
  margin: $s-size 0;
  padding: $s-size;
}

.mealform__iteminputfields--input {
  border: 1px solid $md-brown;
  color: $md-brown;
  height: $m-size;
  width: 100%;
}

.mealform__iteminputfields--input:focus {
  border: 1px solid $md-orange;
  box-shadow: 0 0 2px $off-white;
  outline: none;
}

.mealform__iteminputfields--dropdown {
  height: $ml-size;
}

.mealform__nameinputfield {
  color: $md-brown;
  display: flex;
  flex-direction: column;
  font-size: $s-size;
  padding: 0;
}

.mealform__nameinputfield--input {
  border: 1px solid $md-brown;
  color: $md-brown;
  height: $m-size;
}

.mealform__nameinputfield--input:focus {
  border: 1px solid $md-orange;
  box-shadow: 0 0 2px $off-white;
  outline: none;
}
</style>
