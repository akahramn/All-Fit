<script>
// @ is an alias to /src
import Customer from '@/components/Customer.vue'

export default {
  name: 'Customer',
  components: {
    Customer
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Customers msg="Customer Page"/>
  </div>
</template>
