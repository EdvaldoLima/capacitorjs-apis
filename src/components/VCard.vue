<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot name="body" />
    </div>
    <div class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  margin: 7px;
  padding: 7px;
  box-shadow: 1px 1px 15px -12px #000000;
  border-radius: 1rem;

  &__header,
  &__body,
  &__footer {
    padding: 7px;
  }
}
</style>
