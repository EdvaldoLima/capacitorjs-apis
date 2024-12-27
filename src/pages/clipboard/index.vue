<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ReadResult } from "@capacitor/clipboard";
import { clipboardWrite, clipboardRead } from "@/plugins/capacitorjs";

// Partials
import Page from "@/pages/partials/Page.vue";

let clipboard = ref<ReadResult>();

// Methods
const copyReadClipboard = async () => {
  await clipboardWrite({ string: "CapacitorJs text copied to clipboard" });

  const { type, value } = await clipboardRead();

  clipboard.value = {
    type,
    value,
  };
};

onMounted(async () => {
  await copyReadClipboard();
});
</script>
<template>
  <Page>
    <div>
      <strong>type: </strong> {{ clipboard?.type }} <br />
      <strong>value: </strong> {{ clipboard?.value }} <br />
    </div>
  </Page>
</template>
