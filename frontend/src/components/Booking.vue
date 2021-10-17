<script>
import { mapActions } from 'vuex'

export default {
    name: 'Booking',

    data() {
        return {
            fitnessCenterId: '611e33eb5af671354102a51a',
            customerId: this.$route.params.customerId
        }
    },


    methods: {
        ...mapActions([ 'addNewBooking' ]),
        
        async book({customerId, fitnessCenterId}){
            await this.addNewBooking({customerId, fitnessCenterId})
            alert('Successful')
        }
    },

    
}

</script>

<template>
    <div>
        <p>Please select fitness center where you want to train</p>
        <p>Fitness Center Id: <input v-model="fitnessCenterId" placeholder="Fitness Center Id"> </p>
        <button v-on:click="book({customerId: customerId, fitnessCenterId: fitnessCenterId})">Book</button>
        
          
    </div>
</template>