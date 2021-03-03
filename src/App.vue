<template>
  <img style="width: 100px" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue3 with Vuex 4 example" />
  <router-link to='/'><b>Trang chủ</b></router-link> |
  <router-link to='/login'><b>Login</b></router-link> |

  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  setup() {

  },
  components: {
    HelloWorld
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
b {
  color: #1967d2;
}
</style>