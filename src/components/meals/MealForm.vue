<template>
  <div>
    <h2 class="mealform__header">Create a New Meal</h2>
    <div class="mealform">
        <div class="mealform__nameinputfield">
          <p>Meal Name</p>
          <input type="text" v-model.lazy="mealName">
        </div>
        <div class="mealform__iteminputfields">
          <div>
            <p>Item</p>
            <input type="text" v-model="itemName">
          </div>

          <div>
            <p>Amount</p>
            <input type="number" v-model="amount">
          </div>

          <div>
            <p>Unit</p>
            <select name="unit" v-model="unit">
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
            <button @click="addItem">Add Item</button>
          </div>
        </div>
        <div>
          <button>Save Meal</button>
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

.mealform {
  background: $off-white;
  padding: $s-size;
}

.mealform__button {
  align-items: flex-end;
  display: flex;
}

.mealform__header {
  background: $off-white;
  color: $md-brown;
  font-size: $m-size;
  margin: 0;
  padding: $s-size;
}

.mealform__iteminputfields {
  display: flex;
}

.mealform__nameinputfield {
  color: $md-brown;
}
</style>
