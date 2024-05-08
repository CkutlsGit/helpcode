<template>
  <div class="forum-topics p-4">
    <div class="forum-topics__content">
      <ul v-if="statusGetForumTopics">
        <li class="mt-4" v-for="(topic, index) in forumTopics.topics" :key="index">
          <NuxtLink :to="`forum/topic/${ topic.id }`">
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

  async function sendRequesttoGetForumTopics () {
    const response = await $fetch('/api/frontend-action/forum-action/get-all-forum-topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(response)
    forumTopics = response
    statusGetForumTopics.value = true
  }

  onMounted(() => {
    try {
      sendRequesttoGetForumTopics()
    }
    catch (error) {
      console.error(error)
    }
  })
  function shorterString(string) {
    if (string.length > 35) {
      return string.substring(0, 35) + '...'
    }
    return string
  }
</script>

<style scoped>

</style>