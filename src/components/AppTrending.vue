<script setup lang="ts">
import { trending, whoToFollow } from "@/data";
import AppTrendingCard from "@/components/AppTrendingCard.vue";
</script>

<template>
  <div
    class="lg:block hidden w-1/3 h-full border-l border-lighter py-2 px-8 overflow-y-scroll relative"
  >
    <!-- Search -->
    <input
      class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
      placeholder="Search Twitter"
    />
    <fa-icon
      icon="fas fa-search"
      class="absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
    />

    <!-- Who to follow -->
    <AppTrendingCard title="Who to Follow" class="my-4">
      <template #content>
        <button
          v-for="user in whoToFollow"
          class="w-full flex hover:bg-lighter p-3 border-t border-lighter"
        >
          <img :src="user.profile" class="w-10 h-10 rounded-full" />
          <div class="hidden lg:block ml-2 mr-4">
            <p class="text-sm font-bold leading-tight">{{ user.name }}</p>
            <p class="text-sm leading-tight text-light">{{ user.handle }}</p>
          </div>

          <button
            class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue hover:bg-blue hover:text-white"
          >
            Follow
          </button>
        </button>
      </template>
    </AppTrendingCard>

    <!-- Trending -->
    <AppTrendingCard title="Trends for you">
      <template #content>
        <button
          v-for="trend in trending"
          class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
        >
          <div>
            <p class="text-xs text-left leading-tight text-dark">
              {{ trend.top }}
            </p>
            <p class="font-semibold text-sm text-left leading-tight">
              {{ trend.title }}
            </p>
            <p class="text-left text-sm leading-tight text-dark">
              {{ trend.bottom }}
            </p>
          </div>
          <fa-icon icon="fas fa-angle-down" class="text-lg text-dark" />
        </button>
      </template>
    </AppTrendingCard>
  </div>
</template>
