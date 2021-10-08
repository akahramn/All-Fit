<script>
// @ is an alias to /src
import Customer from '@/components/Customer.vue'

export default {
  name: 'CustomerView',
  components: {
    Customer
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Customer msg="Customer Page"/>
  </div>
</template>
