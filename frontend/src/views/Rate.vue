<script>
// @ is an alias to /src
import Rate from '@/components/Rate.vue'

export default {
  name: 'RateView',
  components: {
    Rate
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Rate/>
  </div>
</template>
