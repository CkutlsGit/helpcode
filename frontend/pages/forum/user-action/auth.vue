<template>
  <h1 class="text-center text-white text-xl font-roboto font-bold pt-6 mb-6">
    Вход
  </h1>
  <div class="user-action__inputs flex flex-col gap-y-3 w-64 mx-auto items-center">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" type="text" placeholder="Введите логин">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" :type="`${ typeInput }`" placeholder="Введите пароль">
    <button class="mt-6 py-2 px-12 bg-gray-300 rounded-lg text-white text-xl font-bold hover:bg-gray-700 default-animation">
      Войти
    </button>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'user-action'
  })
</script>

<style scoped>

</style>