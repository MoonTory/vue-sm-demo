<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="w-full rounded-lg bg-lightest">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">{{ title }}</p>
      <fa-icon
        icon="fas fa-cog"
        class="text-lg text-blue hover:cursor-pointer"
      />
    </div>

    <slot name="content"></slot>

    <button
      class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter"
    >
      Show More
    </button>
  </div>
</template>
