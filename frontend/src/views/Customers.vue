<script>
// @ is an alias to /src
import Customers from '@/components/Customers.vue'

export default {
  name: 'Home',
  components: {
    Customers
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Customers msg="Welcome to All Fit App"/>
  </div>
</template>
