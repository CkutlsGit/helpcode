<template>
  <header class="header relative z-20">
    <div class="header__content flex justify-between m-6 text-white font-roboto font-bold max-sm:flex-col max-sm:text-center">
      <div class="header__logo text-4xl max-sm:text-2xl">
        <NuxtLink to="/">
          <h1 class="header-animation-text">Helpcode.hub</h1>
        </NuxtLink>
      </div>
      <div class="header__nav text-2xl max-sm:mt-4 max-sm:text-lg">
        <nav>
          <NuxtLink class="mx-4 header-animation-text">О нас</NuxtLink>
          <NuxtLink class="mx-4 header-animation-text">Форум</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>