<template>
  <div style="text-align: center;">
    <h3>Login to access</h3>
    <div class="error" v-if="isError">Access Denied</div>
    <div>
        <input placeholder="username" type="text" v-model="username"/>
    </div><br>
    <div>
        <input placeholder="password" type="password" v-model="password"/>
    </div><br>
    <div>    
        <button @click="login()">Login</button>
    </div>
  </div>  
</template>
<script>
import {ref, computed} from "vue"
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const username = ref("")
    const password = ref("")
    const isError = ref(false)
    const store = useStore()
    const router = useRouter()
    const doLogin = (user) => store.dispatch('login/doLogin', user)
    const login = () => {
        if(username.value !== "" && password.value !== "") {
            doLogin({username: username.value, realname: 'Tuanpro98tb'})
            isError.value = false
            router.push('/')
        } else {
            isError.value = true
        }
    }

    // const route = useRoute()

    // function pushWithQuery(query) {
    //   router.push({
    //     name: 'search',
    //     query: {
    //       ...route.query,
    //     },
    //   })
    // }
    // const checkoutStatus = computed(() => store.state.cart.checkoutStatus)
    // const products = computed(() => store.getters['cart/cartProducts'])
    // const total = computed(() => store.getters['cart/cartTotalPrice'])
    // const checkout = (products) => store.dispatch('cart/checkout', products)

    return {
        username,
        password,
        login,
        isError
    }
  }
}
</script>
<style scoped>
    .error {
        width: 250px;
        color: white;
        background-color: #f44336;
        border-radius: 6px;
        margin: auto;
        margin-bottom: 16px;
        padding: 12px;
    }
</style>