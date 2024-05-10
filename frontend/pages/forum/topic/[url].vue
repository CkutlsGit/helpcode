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