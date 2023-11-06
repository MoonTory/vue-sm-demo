<script setup lang="ts">
import AppSidenav from "@/components/AppSidenav.vue";
import AppTimeline from "@/components/AppTimeline.vue";
import AppTrending from "@/components/AppTrending.vue";
</script>

<template>
  <div id="id" class="flex container h-screen w-full">
    <AppSidenav />
    <AppTimeline />
    <AppTrending />
  </div>
</template>
