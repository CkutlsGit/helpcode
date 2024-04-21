<template>
  <section class="create-topic m-20">
    <div class="create-topic__container max-w-96 min-h-96 max-h-96 rounded-md mx-auto border-2 border-gray-400 text-center font-roboto max-sm:border-0 max-sm:rounded-none">
      <h1 class="mt-5 font-semibold text-xl mb-4 max-sm:text-base">Создание темы</h1>
      <div class="create-topic__inputs flex flex-col gap-y-2 w-64 mx-auto max-sm:text-center max-sm:items-center max-sm:w-full">
        <input class="border-2 rounded-lg mt-2 border-gray-400 p-2 max-sm:w-36" type="text" placeholder="Название темы...">
        <textarea class="border-2 rounded-lg border-gray-400 p-2 max-sm:w-36" placeholder="Описание темы..."></textarea>
        <button class="bg-gray-500 text-gray-200 font-medium py-2 mt-6 hover:bg-gray-600 default-animation max-sm:w-36">Создать</button>
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