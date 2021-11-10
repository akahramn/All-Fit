<script>
import { mapActions } from 'vuex'

export default {
  name: 'FitnessCenters',
  props: {
    msg: String
  },
  data: function(){
    return{
      fitnessCenters: []
    }
  },

  async mounted () {
    this.fitnessCenters = await this.fetchFitnessCenters()
  },

  methods: {
    ...mapActions(['fetchFitnessCenters']),
    
  }
  
}
</script>

<template>
  <div class="hello">
    <p>This app unite all fitness centers in the world!!!</p>
    
    <h2>Fitness Centers</h2>
    <ol>
      <li v-for="fitnessCenter in fitnessCenters" :key="fitnessCenter" >
        <a v-bind:href="'fitnessCenters/'+ fitnessCenter._id"> {{fitnessCenter.name}}</a>
      </li>
    </ol>
  </div>
</template>
