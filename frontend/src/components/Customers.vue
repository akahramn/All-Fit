<script>
import { mapActions } from 'vuex'

export default {
  name: 'Customers',
  props: {
    msg: String
  },
  data: function(){
    return{
      customers: [],
      fitnessCenters: []
    }
  },

  async mounted () {
    this.customers = await this.fetchCustomers(),
    this.fitnessCenters = await this.fetchFitnessCenters()
  },

  methods: {
    ...mapActions(['fetchCustomers', 'fetchFitnessCenters']),
    
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
    <h2>Fitness Centers</h2>
    <ol>
      <p>{{fitnessCenters}}</p>
      <li v-for="fitnessCenter in fitnessCenters" :key="fitnessCenter" >
        {{ fitnessCenter.name }}
      </li>
    </ol>
  </div>
</template>
