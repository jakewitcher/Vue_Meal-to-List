<template>
  <div>
    <app-header></app-header>
    <app-meals></app-meals>
  </div>
</template>

<script>
export default {};
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
