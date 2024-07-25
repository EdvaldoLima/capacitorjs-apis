<template>
  <div class="page">
    <VToolbar />
    <div class="page__body">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page{
  &__body {
    // min-height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
    height: 93vh;
  }
}
</style>