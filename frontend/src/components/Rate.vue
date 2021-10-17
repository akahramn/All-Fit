<script>
import { mapActions } from 'vuex'
var point, comment, customerId;
export default {
 data() {
    return {
        point,
        comment,
        customerId:'616c4461c654554e7acef00e',
        fitnessCenter: {},
    }
},
async mounted () {
    this.fitnessCenter = await this.fetchFitnessCenter(this.$route.params.fitnessCenterId);
},

methods: {
    ...mapActions(['rateFitnessCenter', 'fetchFitnessCenter']),

    async submit({point, comment, customerId, fitnessCenterId}) {
        await this.rateFitnessCenter({point, comment,customerId, fitnessCenterId})
        alert('Successful')
    }
},
}
</script>

<template>
    <div>
        <p>Rate {{fitnessCenter.name}} Fitness Center</p>
        <p>Point: <input v-model="point" placeholder="Ex: 8"></p>
        <p>Comment: <input v-model="comment" placeholder="Ex: Very good"></p>
        <p>Customer Id: <input v-model="customerId" >></p>
        <button v-on:click="submit({point: point, comment: comment, customerId: customerId, fitnessCenterId:fitnessCenter._id})">Submit</button>


    </div>
</template>