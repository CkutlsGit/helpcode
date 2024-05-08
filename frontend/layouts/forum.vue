<template>
  <HeaderforumComponent/>
  <div class="loaded" v-if="loadStatus">
    <section class="forum mx-4">
      <div class="forum__container font-rubik border-r-2 border-l-2 border-gray-400 min-h-screen max-h-screen container mx-auto">
        <div class="forum__content max-h-screen overflow-y-auto">
          <div class="forum__content-create text-center p-2 bg-gray-200">
            <div v-if="notCreatePage" class="forum-button__create-topic">
              <NuxtLink to="/forum/create-topic" v-if="user !== ''" class="bg-gray-300 rounded-lg py-2 px-12 font-medium text-xl hover:bg-gray-500 default-animation max-sm:text-base max-sm:px-0">Создать тему</NuxtLink>
            </div>
            <div v-else>
              <NuxtLink to="/forum" @click="notCreatePage = true" class="bg-gray-300 rounded-lg py-2 px-12 font-medium text-xl hover:bg-gray-500 default-animation max-sm:text-base max-sm:px-0">Вернуться назад</NuxtLink>
            </div>
            <h2 class="mt-2" v-if="user === ''">
              <NuxtLink class="hover:text-blue-400 font-bold default-animation" to="/forum/user-action/auth">Войти</NuxtLink> или <NuxtLink class="hover:text-red-400 font-bold default-animation" to="/forum/user-action/register">Зарегистрироваться</NuxtLink>
            </h2>
            <h2 class="mt-2" v-else>Вы вошли как <strong>{{ user }}</strong></h2>
            <button v-if="user !== ''" @click="exitAccount" class="bg-gray-500 py-2 px-6 rounded-lg text-white hover:bg-gray-300 default-animation">Выйти</button>
          </div>
        </div>
        <slot/>
      </div>
    </section>
  </div>
  <div v-if="!loadStatus" class="unloaded absolute left-1/2 top-1/2"></div>
</template>

<script setup>
  const user = ref('')
  const notCreatePage = ref(true)
  const loadStatus = ref(false)

  const { $bus } = useNuxtApp()

  async function sendRequesttoGetForumTopics () {
    const response = await $fetch('/api/frontend-action/forum-action/get-all-forum-topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(response)
  }

  onMounted(() => {
    if (getCookie('user')) {
      user.value = getCookie('user')
      loadStatus.value = true
    }
    else {
      loadStatus.value = true
    }
    $bus.on('changedValueBtn', () => {
      notCreatePage.value = false
    })

    try {
      sendRequesttoGetForumTopics()
    }
    catch (error) {
      console.error(error)
    }
  })

  async function exitAccount() {
    deleteCookie('user')
    await navigateTo('/')
  }
</script>

<style scoped>
.unloaded {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid #dbdcef;
  border-right-color: #474bff;
  animation: spinner-d3wgkg 1s infinite linear;
}

@keyframes spinner-d3wgkg {
  to {
    transform: rotate(1turn);
  }
}
</style>