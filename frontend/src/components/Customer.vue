<script>
import { mapActions } from 'vuex'

export default {
  name: 'Customer',
  props: {
    msg: String
  },
  data: function(){
    return{
      customer: {},
    }
  },
  

  async mounted () {
    this.customer = await this.fetchCustomer(this.$route.params.customerId)
  },

  methods: {
    ...mapActions(['fetchCustomer']),
    
  }
  
}
</script>

<template>
  <div class="hello">
    <p>This app unite all fitness centers in the world!!!</p>
    <h2>Customer Info</h2>
    <p>Name: {{customer.name}} <br>
       Age : {{customer.age}} <br>
       mail: {{customer.mail}} <br>
       Phone Number: {{customer.phoneNum}} 
    </p>
    <a v-bind:href="'/customers/'+ customer._id + '/bookings'"><button>Book</button></a>
    <h2>Bookings</h2>
    <ol>
      <li v-for="booking in customer.bookings" :key="booking">
          {{booking.Customer.name}} sports in {{booking.FitnessCenter.name}}
      </li>
    </ol>

  </div>
</template>
