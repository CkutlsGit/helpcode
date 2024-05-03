<template>
  <div class="forum-topics p-4">
    <div class="forum-topics__content">
      <ul>
<!--        <li class="mt-4" v-for="(topic, index) in forumTopics" :key="index">-->
<!--          <NuxtLink :to="`forum/topic/${ topic.id }`">-->
<!--            <h2 class="font-semibold mb-1">{{ topic.title }}</h2>-->
<!--            <p class="font-medium mb-2">{{ topic.smallDescription }}</p>-->
<!--            <div class="topic-info flex gap-4 font-bold text-gray-400">-->
<!--              <h3>{{ topic.username }}</h3>-->
<!--              <h3>{{ topic.date }}</h3>-->
<!--            </div>-->
<!--          </NuxtLink>-->
<!--        </li>-->
      </ul>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })
</script>

<style scoped>

</style>