<template>
  <section class="user-action bg-gray-400 w-full h-screen">
    <div class="user-action__content relative top-1/4 left-1/2 -translate-x-1/2 z-20 bg-gray-500 min-w-96 max-w-96 min-h-96 max-h-96 rounded-lg max-sm:max-w-72 max-sm:min-w-72">
      <h1 class="text-center text-white text-xl font-roboto font-bold pt-6 mb-6">
        <slot name="name"></slot>
      </h1>
      <div class="user-action__inputs flex flex-col gap-y-3 w-64 mx-auto items-center">
        <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" type="text" placeholder="Введите логин">
        <input class="border-gray-400 border-2 bg-gray-300 text-white font-bold p-2" :type="`${ typeInput }`" placeholder="Введите пароль">
        <slot name="confirm-password"></slot>
        <button class="mt-6 py-2 bg-gray-300 rounded-2xl text-white font-bold hover:bg-gray-700 default-animation">
          <slot name="name-action"></slot>
        </button>
      </div>
    </div>
  </section>
  <div class="circles-area" >
    <ul class="circles-area__circles-elements">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div >
</template>

<script setup>
  const typeInput = 'password'
</script>

<style scoped>
textarea {
  resize: none;
}
input:focus, textarea:focus {
  outline: none;
  box-shadow: none;
}
.circles-area__circles-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles-area__circles-elements li {
  position: absolute;
  display: block;
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles-area__circles-elements li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.circles-area__circles-elements li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles-area__circles-elements li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles-area__circles-elements li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles-area__circles-elements li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles-area__circles-elements li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles-area__circles-elements li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles-area__circles-elements li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles-area__circles-elements li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles-area__circles-elements li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>