<script setup lang="ts">
import { ref, onMounted } from "vue";
import { exitApp, minimizeApp, getInfo, getState } from "@/plugins/capacitorjs";

// Partials
import Page from "@/pages/partials/Page.vue";

let info = ref();
let state = ref();

onMounted(async () => {
  info.value = await getInfo();
  state.value = await getState();
});
</script>
<template>
  <Page>
    <div>
      <strong>App Info</strong>
      <div>
        <strong>name</strong> {{ info.name }} <br />
        <strong>id</strong> {{ info.id }} <br />
        <strong>build</strong> {{ info.build }} <br />
        <strong>version</strong> {{ info.version }}
      </div>
    </div>
    <VButton @click="minimizeApp"> Minimize App </VButton>
    <VButton @click="exitApp"> Exit App </VButton>
  </Page>
</template>
