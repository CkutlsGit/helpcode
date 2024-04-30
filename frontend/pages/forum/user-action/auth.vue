<template>
  <h1 class="text-center text-white text-xl font-roboto font-bold pt-6 mb-6">
    Вход
  </h1>
  <div class="user-action__inputs flex flex-col gap-y-3 w-64 mx-auto items-center">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" v-model="username" type="text" placeholder="Введите логин">
    <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" v-model="password" placeholder="Введите пароль">
    <button @click="authUser" class="mt-6 py-2 px-12 bg-gray-300 rounded-lg text-white text-xl font-bold hover:bg-gray-700 default-animation">
      Войти
    </button>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'user-action'
  })

  const username = ref('')
  const password = ref('')

  async function authUser() {
    if (username.value !== '' && password.value !== '') {
      try {
        const response = await $fetch('/api/frontend-action/user-action/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username.value, password: password.value })
        })

        console.log(response)
      }
      catch (error) {
        console.error(error)
      }
    }
  }
</script>

<style scoped>

</style>