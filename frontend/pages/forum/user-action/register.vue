<template>
  <h1 class="text-center text-white text-xl font-roboto font-bold pt-6 mb-6">
    Регистрация
  </h1>
  <div class="user-action__inputs flex flex-col gap-y-3 w-64 mx-auto items-center">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" type="text" v-model="username" placeholder="Введите логин">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" v-model="password" placeholder="Введите пароль">
    <button @click="registerUser" class="mt-6 py-2 px-12 bg-gray-300 rounded-lg text-white text-xl font-bold hover:bg-gray-700 default-animation">
      Зарегистрироваться
    </button>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'user-action'
  })

  const username = ref('')
  const password = ref('')

  async function registerUser() {
    if (username.value !== '' && password.value !== '' && password.value.length >= 6) {
      try {
        const response = await $fetch('/api/frontend-action/user-action/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username.value, password: password.value })
        })

        if (response.message === 'Пользователь успешно зарегистрирован.') {
          await navigateTo('/forum/user-action/auth')
        }
      }
      catch (error) {
        console.error(error)
      }
    }
    else if (password.value.length < 6) {
      console.log('Меньше шести')
    }
  }
</script>

<style scoped>

</style>