<script setup lang="ts">
import { openBrowserURL } from "@/plugins/capacitorjs";

// Partials
import Page from "@/pages/partials/Page.vue";
</script>
<template>
  <Page>
    <VButton @click="openBrowserURL('http://capacitorjs.com/')">
      capacitorjs.com
    </VButton>
  </Page>
</template>
