<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomePage',
  components: {
    Home
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="Welcome to All Fit App"/>
  </div>
</template>
