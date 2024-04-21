<template>
  <section class="create-topic m-20">
    <div class="create-topic__container max-w-96 min-h-96 max-h-64 rounded-md mx-auto border-2 border-gray-400 text-center font-roboto">
      <h1 class="mt-5 font-semibold text-xl mb-4">Создание темы</h1>
      <div class="create-topic__inputs flex flex-col gap-y-2 w-64 mx-auto">
        <input class="border-2 rounded-lg mt-2 border-gray-400 p-2" type="text" placeholder="Название темы...">
        <textarea class="border-2 rounded-lg border-gray-400 p-2" placeholder="Описание темы..."></textarea>
        <button class="bg-gray-500 text-gray-200 font-medium py-2 mt-6 hover:bg-gray-600 default-animation">Создать</button>
      </div>
    </div>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: 'forum'
  })


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