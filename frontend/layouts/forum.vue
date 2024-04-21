<template>
  <HeaderforumComponent/>
  <section class="forum mx-4">
    <div class="forum__container font-rubik border-r-2 border-l-2 border-gray-400 min-h-screen max-h-screen container mx-auto">
      <div class="forum__content max-h-screen overflow-y-auto">
        <div class="forum__content-create text-center p-2 bg-gray-200">
          <NuxtLink to="forum/create-topic" v-if="user !== ''" class="bg-gray-300 rounded-lg py-2 px-12 font-medium text-xl hover:bg-gray-500 default-animation">Создать тему</NuxtLink>
          <h2 class="mt-2" v-if="user === ''">
            <NuxtLink class="hover:text-blue-400 font-bold default-animation" to="/about">Войти</NuxtLink> или <NuxtLink class="hover:text-red-400 font-bold default-animation" to="/">Зарегистрироваться</NuxtLink>
          </h2>
          <h2 class="mt-2" v-else>Вы вошли как <strong>{{ user }}</strong></h2>
        </div>
      </div>
      <slot/>
    </div>
  </section>
</template>

<script setup>
  const user = 'admin'
</script>

<style scoped>

</style>