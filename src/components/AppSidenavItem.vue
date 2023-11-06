<script setup lang="ts">
import type { SidenavTab } from "@/types";

defineProps<{
  tab: SidenavTab;
}>();
</script>

<template>
  <button
    class="flex items-center py-2 px-4 hover:bg-lightblue hover:text-blue rounded-full mr-auto mb-3"
  >
    <fa-icon :icon="`${tab.icon}`" class="text-2xl mr-4 text-left" />
    <p class="text-lg font-semibold text-left hidden lg:block">
      {{ tab.title }}
    </p>
  </button>
</template>
