<script setup lang="ts">
import { ref } from "vue";

let dropdown = ref(false);
</script>

<template>
  <div class="lg:w-full relative">
    <button
      @click="dropdown = true"
      class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
    >
      <img src="profile.jpg" class="w-10 h-10 rounded-full" />
      <div class="hidden lg:block ml-2 mr-4">
        <p class="text-sm font-bold leading-tight">MoonTory</p>
        <p class="text-sm leading-tight text-light">@TheMoonTory</p>
      </div>
      <fa-icon icon="fas fa-ellipsis" class="hidden lg:block ml-auto text-lg" />
    </button>

    <div
      v-if="dropdown === true"
      class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
    >
      <button
        @click="dropdown = false"
        class="w-full text-left hover:bg-lightest p-3 test-sm focus:outline-none"
      >
        Add an existing account
      </button>
      <button
        @click="dropdown = false"
        class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
      >
        Log out @TheMoonTory
      </button>
    </div>
  </div>
</template>
