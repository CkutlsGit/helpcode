<template>
  <div v-if="visionInfoTopic">
    <div class="forum-topic">
      <div class="forum-topic__content">
        <h1 class="text-center mt-4 text-xl font-bold">{{ topicInfo.title }}</h1>
        <div class="forum-topic__info m-6 font-semibold">
          <p>{{ topicInfo.description }}</p>
          <div class="forum-topic__author-info mt-5 font-normal">
            <h2>{{ topicInfo.author }}</h2>
            <h2>{{ topicInfo.date }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="forum-topic__comments">
      <div class="forum-topic__comments-content max-h-24 overflow-y-auto">
        <div class="comment">
          <h2 class="font-bold mb-2">Author name</h2>
          <p class="font-semibold -mb-1">Author description</p>
          <div class="comment-data">
            <h3 class="text-sm">Date comment</h3>
          </div>
        </div>
      </div>
      <div class="forum-topic__comments-input mt-6">
        <input class="border-gray-400 border-2" type="text">

      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })
  let topicInfo = reactive([])
  const visionInfoTopic = ref(false)

  const router = useRoute()
  onMounted(async () => {
    try {
      const response = await $fetch('/api/frontend-action/forum-action/get-forum-topic-by-id', {
        method: 'POST',
        body: JSON.stringify({ id: router.params.url }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      console.log(response)
      if (Object.keys(response).length === 0) {
        console.log('Пустой')
      }
      else {
        topicInfo = response.topic
        visionInfoTopic.value = true
      }
    }
    catch (error) {
      console.error(error)
    }
  })
</script>

<style scoped>

</style>