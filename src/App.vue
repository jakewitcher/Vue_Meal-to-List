<template>
  <div>
    <app-header></app-header>
    <div>
      <button class="form-tabs" @click="newMeal">Create a new meal</button>
      <button class="form-tabs" @click="newGrocery">Create a new grocery list</button>
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
  background: $light-blue;
  border: none;
  border: 1px solid darken($light-blue, 15%);
  border-radius: 3px;
  color: $white;
  padding: 5px;
  margin: $s-size;
}

button:disabled {
  cursor: default;
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
