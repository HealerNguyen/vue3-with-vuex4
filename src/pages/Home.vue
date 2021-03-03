<template>
  <div>
    <h3>Dashboard</h3>
    <div>
      <ul v-if="isLoggedin">
        <li v-for="(user,index) in users" :key="index">{{user.name}}</li>
      </ul>
      <h4 v-if="!isLoggedin"><a @click="gotoLogin()"><u>Login</u></a> to access list item</h4>
    </div>
  </div>  
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const users = computed(() => store.state.users.all)
    store.dispatch('users/getAllUsers')
    const isLoggedin = computed(() => store.getters['login/isLoggedin'])
    const gotoLogin = () => {
      router.push('/login')
    }
    return {
      users,
      isLoggedin,
      gotoLogin
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
a {
  cursor: pointer;
}
</style>