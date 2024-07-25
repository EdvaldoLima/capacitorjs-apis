<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.button{
  padding: 8px 14px;
  border: none;
  background: var(--blue);
  color: #ffffff;
  border-radius: 100rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
}
</style>