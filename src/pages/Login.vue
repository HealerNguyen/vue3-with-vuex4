<template>
  <div style="text-align: center;">
    <h3>Login to access</h3>
    <input type="text" v-model="username"/>
    <input type="password" v-model="password"/>
    <button @click="login()">Login</button>
  </div>  
</template>
<script>
import {ref} from "vue"
export default {
  setup() {
    const username = ref("")
    const password = ref("")
    const login = () => {

    }

    return {
        username,
        password,
        login
    }
  }
}
</script>