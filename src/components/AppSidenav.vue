<script setup lang="ts">
import AppSidenavItem from "@/components/AppSidenavItem.vue";
import AppSidenavAvatar from "@/components/AppSidenavAvatar.vue";

const tabs = [
  { icon: "fas fa-home", title: "Home", id: "home" },
  { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
  { icon: "fas fa-bell", title: "Notifications", id: "notifications" },
  { icon: "fas fa-envelope", title: "Messages", id: "messages" },
];
</script>

<template>
  <div
    class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between"
  >
    <div>
      <button
        class="ml-1 h-12 w-12 text-3xl hover:bg-lightblue rounded-full text-blue mb-4"
      >
        <fa-icon icon="fa-brands fa-x-twitter" />
      </button>

      <AppSidenavItem v-for="tab in tabs" :tab="tab" />

      <button
        class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
      >
        <p class="hidden lg:block">Post</p>
        <fa-icon icon="fas fa-plus" class="lg:hidden" />
      </button>
    </div>

    <AppSidenavAvatar />
  </div>
</template>
