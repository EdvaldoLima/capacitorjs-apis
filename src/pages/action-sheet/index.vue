<script setup lang="ts">
import { ref } from "vue";
import { showActions } from "@/plugins/capacitorjs";
// Partials
import Page from "@/pages/partials/Page.vue";

// Data
const sheetResult = ref<number>();
const sheetOptions = ref({
  title: "Photo Options",
  message: "Select an option to perform",
  options: [
    {
      title: "Upload",
    },
    {
      title: "Share",
    },
    {
      title: "Remove",
    },
  ],
});

// Methods
const openActionSheet = async () => {
  const result = await showActions(sheetOptions.value);

  sheetResult.value = result.index;
};
</script>
<template>
  <Page>
    <VCard>
      <template #body>
        <div class="options">
          <span> <strong>title: </strong>{{ sheetOptions.title }}</span>
          <span>
            <strong>message(only iOS): </strong>{{ sheetOptions.message }}</span
          >
          <span>
            <strong>options:</strong>
            <ul class="options__list">
              <li v-for="option in sheetOptions.options">
                {{ option.title }}
              </li>
            </ul>
          </span>
          <span>
            <strong>option selected:</strong>
            {{ sheetResult }}
          </span>
        </div>
      </template>
    </VCard>

    <VButton @click="openActionSheet"> Open Action Sheet </VButton>
  </Page>
</template>
<style lang="scss" scoped>
.options {
  display: flex;
  flex-direction: column;
  margin: 7px;

  &__list {
    margin: 7px;
    list-style: none;
  }
}
</style>
