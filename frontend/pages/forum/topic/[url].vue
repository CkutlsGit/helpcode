<template>

</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })
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
    }
    catch (error) {
      console.error(error)
    }
  })
</script>

<style scoped>

</style>