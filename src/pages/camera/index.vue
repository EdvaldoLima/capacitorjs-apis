<script setup lang="ts">
import { ref, computed } from "vue";
import { takePicture } from "@/plugins/capacitorjs";

// Partials
import Page from "@/pages/partials/Page.vue";

const image = ref<string | undefined>('');
const imageExists = computed(()=> !!image.value)

const capture = async () => {
  const result = await takePicture();

  image.value = result.webPath;
};
</script>
<template>
  <Page>
    <img v-show="imageExists" :src="image" />
    <VButton @click="capture()"> Take Picture </VButton>
  </Page>
</template>
<style lang="scss">
img{
  width: 50%;
  height: 50%;
}
</style>
