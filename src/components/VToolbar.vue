<template>
  <div class="toolbar">
    <router-link to="/" class="toolbar__back">
      <i class="toolbar__back__icon ri-arrow-left-line" />
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  align-items: center;
  padding: 7px;
  height: 7vh;
  box-shadow: 1px 1px 15px -12px #000000;
  background: var(--surface);

  &__back {
    text-decoration: none;

    &__icon {
      font-size: 1.5rem;
      color: var(--blue);
    }
  }
}
</style>
