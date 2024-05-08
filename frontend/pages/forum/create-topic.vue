<template>
  <section class="create-topic m-20">
    <div class="create-topic__container max-w-96 min-h-96 max-h-96 rounded-md mx-auto border-2 border-gray-400 text-center font-roboto max-sm:border-0 max-sm:rounded-none">
      <h1 class="mt-5 font-semibold text-xl mb-4 max-sm:text-base">Создание темы</h1>
      <div class="create-topic__inputs flex flex-col gap-y-2 w-64 mx-auto max-sm:text-center max-sm:items-center max-sm:w-full">
        <input class="border-2 rounded-lg mt-2 border-gray-400 p-2 max-sm:w-36" v-model="titleTopic" type="text" placeholder="Название темы...">
        <textarea class="border-2 rounded-lg border-gray-400 p-2 max-sm:w-36" v-model="descriptionTopic" placeholder="Описание темы..."></textarea>
        <button @click="createForumTopic" class="bg-gray-500 text-gray-200 font-medium py-2 mt-6 hover:bg-gray-600 default-animation max-sm:w-36">Создать</button>
      </div>
      <h2 v-if="errorMsg" class="text-red-400 text-center text-xs font-bold mt-4">{{ errorMsg }}</h2>
    </div>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })
  const titleTopic = ref('')
  const descriptionTopic = ref('')
  const username = ref('')

  const { $bus } = useNuxtApp()
  const errorMsg = ref('')

  onMounted(() => {
    $bus.emit('changedValueBtn')
    if (getCookie('user')) {
      username.value = getCookie('user')
    }
  })

  function getFullDate() {
    const date = new Date()

    const currentDay = date.getDay()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()

    const currentHour = date.getHours()
    const currentMinute = date.getMinutes()

    const finalDate = [currentDay, currentMonth, currentYear, currentHour, currentMinute].join('-')
    return finalDate
  }
  async function createForumTopic() {
    console.log('click')
    if (titleTopic.value !== '' && descriptionTopic.value !== '' && username.value !== '') {
      try {
        console.log('hype')
        const date = getFullDate()
        const response = await $fetch('/api/frontend-action/forum-action/create-forum-topic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            author: username.value,
            title: titleTopic.value,
            description: descriptionTopic.value,
            date: date
          })
        })

        if (response.message === 'Форум-топик успешно создан!') {
          console.log('Успешно все создано!')
          await navigateTo('/forum')
        }
        if (response.error) {
          console.log(response.error)
          errorMsg.value = response.error
        }
      }
      catch (error) {
        console.error(error)
      }
    }
  }
</script>

<style scoped>
textarea {
  resize: none;
}
input:focus, textarea:focus {
  outline: none;
  box-shadow: none;
}
</style>