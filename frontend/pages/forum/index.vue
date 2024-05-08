<template>
  <div class="forum-topics p-4">
    <div class="forum-topics__content">
      <ul v-if="statusGetForumTopics">
        <li class="mt-4" v-for="(topic, index) in forumTopics.topics" :key="index">
          <NuxtLink :to="`forum/topic/${ getPathForumTopic(topic.title, topic.date, topic.author) }`">
            <h2 class="font-semibold mb-1">{{ shorterString(topic.title) }}</h2>
            <p class="font-medium mb-2">{{ shorterString(topic.description) }}</p>
            <div class="topic-info flex gap-4 font-bold text-gray-400">
              <h3>{{ topic.username }}</h3>
              <h3>{{ topic.date }}</h3>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })
  const statusGetForumTopics = ref(false)

  let forumTopics = reactive([])
  const { $bus } = useNuxtApp()

  onMounted(() => {
    $bus.on('sendForumTopics', (data) => {
      forumTopics = data
      statusGetForumTopics.value = true
      console.log(forumTopics)
    })
  })
  function shorterString(string) {
    if (string.length > 35) {
      return string.substring(0, 35) + '...'
    }
    return string
  }
  function getPathForumTopic (title, date, author) {
    if (title.length > 35) {
      return title.substring(0, 35) + date + author
    }
    return title + date + author
  }
</script>

<style scoped>

</style>