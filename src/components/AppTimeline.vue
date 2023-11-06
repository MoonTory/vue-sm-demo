<script setup lang="ts">
import { posts } from "@/data";
import AppTimelinePost from "@/components/AppTimelinePost.vue";
import AppTimelineForm from "@/components/AppTimelineForm.vue";
</script>

<template>
  <div class="w-full lg:w-1/2 h-full overflow-y-scroll">
    <div
      class="px-5 py-3 border-b border-lighter flex items-center justify-between"
    >
      <h1 class="text-xl font-bold">Home</h1>
      <fa-icon icon="far fa-star" class="text-xl text-blue" />
    </div>

    <AppTimelineForm />

    <div class="flex flex-col-reverse">
      <AppTimelinePost v-for="post in posts" :post="post" />
    </div>
  </div>
</template>
