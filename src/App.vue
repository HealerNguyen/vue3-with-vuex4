<template>
  <img style="width: 100px" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue3 with Vuex 4 example" />
  <router-link to='/'><b>Trang chủ</b></router-link> |
  <router-link v-if="!isLoggedin" to='/login'><b>Login</b></router-link>
  <router-link v-if="isLoggedin" to="#"><b @click="logout()">{{user.realname}} - <a>Logout</a></b></router-link> |
  <router-link v-if="isLoggedin" to='/me'><b>About me</b></router-link>

  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const user = computed(() => store.getters['login/userData'])
    const isLoggedin = computed(() => store.getters['login/isLoggedin'])
    const logout = () => {
      store.dispatch('login/doLogout')
      
    }
    return {
      isLoggedin,
      user,
      logout
    }
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