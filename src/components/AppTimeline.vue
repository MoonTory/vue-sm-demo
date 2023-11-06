<script setup lang="ts">
import { posts } from "@/data";
import AppTimelinePost from "@/components/AppTimelinePost.vue";
</script>

<template>
  <div class="w-full lg:w-1/2 h-full overflow-y-scroll">
    <div
      class="px-5 py-3 border-b border-lighter flex items-center justify-between"
    >
      <h1 class="text-xl font-bold">Home</h1>
      <fa-icon icon="far fa-star" class="text-xl text-blue" />
    </div>

    <div class="px-5 py-3 border-b border-lighter flex">
      <div class="flex-none">
        <img
          src="profile.jpg"
          class="flex-none w-12 h-12 rounded-full border border-lighter"
        />
      </div>
      <form class="w-full px-4 relative">
        <textarea
          placeholder="What is happening?!"
          class="mt-3 pb-3 w-full focus:outline-none"
        />
        <div class="flex items-center">
          <fa-icon
            icon="fas fa-image"
            class="text-lg text-blue mr-4 hover:cursor-pointer"
          />
          <fa-icon
            icon="fas fa-film"
            class="text-lg text-blue mr-4 hover:cursor-pointer"
          />
          <fa-icon
            icon="fas fa-chart-bar"
            class="text-lg text-blue mr-4 hover:cursor-pointer"
          />
          <fa-icon
            icon="fas fa-smile"
            class="text-lg text-blue mr-4 hover:cursor-pointer"
          />
        </div>
        <button
          type="submit"
          class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
        >
          Tweet
        </button>
      </form>
    </div>

    <div class="flex flex-col-reverse">
      <AppTimelinePost v-for="post in posts" :post="post" />
    </div>
  </div>
</template>
