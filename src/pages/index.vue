<script setup lang="ts">
import { openBrowserURL } from "@/plugins/capacitorjs";
import plugins from "@/constants/plugins";

// Methods
</script>

<template>
  <div>
    <VCard v-for="(plugin, index) in plugins" :key="index">
      <template #header>
        <h2>
          {{ plugin.title }}
        </h2>
      </template>
      <template #body>
        <strong>
          <div class="text-blue">
            {{ plugin.plugin }}
          </div>
        </strong>
        <br />
        {{ plugin.description }}
      </template>

      <template #footer>
        <div class="footer">
          <router-link v-if="plugin.toPage" :to="plugin.toPage">
            <VButton>
              <i class="ri-eye-line"></i>
            </VButton>
          </router-link>
          <VButton @click="openBrowserURL(plugin.documentation)">
            <i class="ri-plug-line"></i>
          </VButton>
        </div>
      </template>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: start;
  gap: 0.5rem;
}
</style>
