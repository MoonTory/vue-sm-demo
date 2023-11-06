<script setup lang="ts">
import moment from "moment";
import { numFormatter } from "@/helpers";
import type { TimelinePost } from "@/types";

defineProps<{
  post: TimelinePost;
}>();
</script>

<template>
  <div class="w-full p-4 border-b border-lighter hover:bg-lighter flex">
    <div class="flex-none mr-4">
      <img
        :src="post.author.profile"
        class="h-12 w-12 rounded-full flex-none"
      />
    </div>

    <div class="w-full">
      <div class="flex items-center w-full">
        <p class="font-semibold">{{ post.author.name }}</p>
        <p class="text-sm text-dark ml-2">@{{ post.author.handle }}</p>
        <span class="text-dark ml-1 mr-1">•</span>
        <p class="text-sm text-dark">
          {{ moment(post.createdAt).fromNow() }}
        </p>
        <fa-icon icon="fas fa-ellipsis" class="text-dark ml-auto" />
      </div>
      <p class="py-2">
        {{ post.content }}
      </p>
      <div v-if="post.image" class="w-full h-96">
        <img
          atl="Post image"
          :src="post.image"
          class="rounded-md w-full h-full object-cover"
        />
      </div>
      <div class="flex items-center justify-between w-full mt-2">
        <div class="flex items-center text-sm text-dark">
          <fa-icon icon="far fa-comment" class="hover:cursor-pointer mr-3" />
          <p>{{ numFormatter(post.comments, 1) }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <fa-icon icon="fas fa-retweet" class="hover:cursor-pointer mr-3" />
          <p>{{ numFormatter(post.shares, 1) }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <fa-icon icon="fas fa-heart" class="hover:cursor-pointer mr-3" />
          <p>{{ numFormatter(post.likes, 1) }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <fa-icon
            icon="fas fa-share-square"
            class="hover:cursor-pointer mr-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
