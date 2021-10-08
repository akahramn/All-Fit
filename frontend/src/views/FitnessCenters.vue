<script>
// @ is an alias to /src
import FitnessCenters from '@/components/FitnessCenters.vue'

export default {
  name: 'Fitness Centers Page',
  components: {
    FitnessCenters
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FitnessCenters msg="FitnessCenters"/>
  </div>
</template>
