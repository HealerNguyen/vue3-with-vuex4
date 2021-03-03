<template>
  <div>
    <h3>About me</h3>
    <div v-if="isLoggedin">
      Hello there, I am Nguyễn Đức Tuấn
      <a target="_blank" href="https://github.com/Viruss98">Github</a> | <a target="_blank" href="https://twitter.com/__fullstackjs">Twitter</a>
    </div>
  </div>  
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isLoggedin = computed(() => store.getters['login/isLoggedin'])
    return {
      isLoggedin
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>