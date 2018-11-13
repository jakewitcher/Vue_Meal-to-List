<template>
  <div>
    <app-header></app-header>
    <div>
      <div class="form-tabs">
        <button class="form-tabs__button form-tabs__button--meal" @click="newMeal">New meal</button>
        <button class="form-tabs__button form-tabs__button--grocery" @click="newGrocery">New grocery list</button>
      </div>
      <app-meals v-show="mealForm"></app-meals>
      <app-groceries v-show="groceryForm"></app-groceries>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mealForm: true,
      groceryForm: false
    };
  },
  methods: {
    newMeal() {
      this.mealForm = true;
      this.groceryForm = false;
    },
    newGrocery() {
      this.groceryForm = true;
      this.mealForm = false;
    }
  }
};
</script>

<style lang="scss">
@import "./../styles/settings.scss";

body {
  background: $light-beige;
  margin: auto;
  width: 90%;
}

button {
  cursor: pointer;
}

.form-tabs {
  display: flex;
  padding: 0;
  width: 100%;
}

.form-tabs__button {
  background: $light-blue;
  border: none;
  border: 1px solid darken($light-blue, 15%);
  border-radius: 10px 10px 0 0;
  color: $white;
  padding: 5px;
  margin: $s-size $s-size 0 $s-size;
  width: 100%;
}

.form-tabs__button--meal {
  margin-right: 2.5px;
}

.form-tabs__button--grocery {
  margin-left: 2.5px;
}

html {
  font-size: 62.5%;
}

@media (min-width: $desktop-breakpoint) {
  body {
    width: 60%;
  }
}
</style>
