<script setup lang="ts">
import { ref, computed } from "vue";
import { canOpenUrl, openUrl } from "@/plugins/capacitorjs";

// Partials
import Page from "@/pages/partials/Page.vue";

// Data
const isCan = ref()
const chromeAppId = ref({ url: 'com.android.chrome' })

// Computed
const resultIsOpenApp = computed(() => isCan.value?.value ? "Yes" : "No")

// Methods
const canUrl = async () => {
  const result = await canOpenUrl(chromeAppId.value)
  isCan.value = result
}

const openAppUrl = async () => {
  await openUrl(chromeAppId.value)
}
</script>
<template>
  <Page>
    <strong>
      is can open chrome browser?
    </strong>
    {{ resultIsOpenApp }}
    <VButton @click="canUrl">
      check is can open Chrome
    </VButton>
    <VButton @click="openAppUrl">
      open Chrome
    </VButton>
  </Page>
</template>