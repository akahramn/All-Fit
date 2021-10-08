<script>
import { mapActions } from 'vuex'

export default {
  name: 'Customer',
  props: {
    msg: String
  },
  data: function(){
    return{
      customers: [],
    }
  },

  async mounted () {
    this.customers = await this.fetchCustomers()
  },

  methods: {
    ...mapActions(['fetchCustomers']),
    
  }
  
}
</script>

<template>
  <div class="hello">
    <p>This app unite all fitness centers in the world!!!</p>
    <h2>Customers</h2>
    <ol>
      <li v-for="customer in customers" :key="customer">
        {{customer.name}}
      </li>
    </ol>
  </div>
</template>
