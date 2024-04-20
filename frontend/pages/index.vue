<template>
  <main class="main main-bg">
    <div class="main__content relative z-10 top-40">
      <div class="main-text text-center text-white text-2xl font-rubik font-medium mt-16">
        <h1 class="font-bold">Форум для оказания помощи связанной с Программированием</h1>
        <p class="mt-4">Помощь по любому вопросу от наших пользователей</p>
        <div class="main-text__button mt-12">
          <NuxtLink to="/" class="bg-orange-200 p-6 rounded-lg hover:text-gray-300 hover:bg-orange-400 default-animation max-sm:p-4 max-sm:text-xl">Перейти на форум</NuxtLink>
        </div>
      </div>
    </div>
  </main>
  <section class="content ml-12 -mt-32 max-sm:ml-0">
    <div class="content__container">
      <h1 class="font-roboto font-bold text-2xl my-4 max-sm:text-center">Последние публикации</h1>
      <div class="publications__content max-h-32 overflow-y-auto font-rubik font-semibold max-sm:flex max-sm:flex-col max-sm:items-center">
        <div class="publication-element mb-4 p-2 border-2 min-w-[45rem] max-w-[50rem] min-h-[5rem] max-h-[10rem] max-lg:min-w-[30rem]  max-lg:max-w-[35rem] max-sm:min-w-[15rem] max-sm:max-w-[20rem] max-sm:p-2">
          <h1>Error JS(ES6)</h1>
          <p class="font-medium">Проблема с JS помогите пожалуйста очень сильно не могу понять</p>
        </div>
        <div class="publication-element mb-4 p-2 border-2 min-w-[45rem] max-w-[50rem] min-h-[5rem] max-h-[10rem] max-lg:min-w-[30rem] max-lg:max-w-[35rem] max-sm:min-w-[15rem] max-sm:max-w-[20rem] max-sm:p-2">
          <h1>Error PHP(ES6)</h1>
          <p class="font-medium">Этот дурацкий слон уже заканыкал меня что это за синтаксическая</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>