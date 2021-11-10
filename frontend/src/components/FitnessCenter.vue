<script>
import { mapActions } from "vuex";

export default {
  name: "FitnessCenter",

  data: function () {
    return {
      fitnessCenter: {},
    };
  },
  
  async mounted () {
    this.fitnessCenter = await this.fetchFitnessCenter(this.$route.params.fitnessCenterId);
  },

  methods: {
    ...mapActions(["fetchFitnessCenter"]),
  }
}
</script>

<template>
  <div>
    <h2>Fitness Center Info</h2>
    <p>
      Name: {{ fitnessCenter.name }} <br />
      Phone Number: {{ fitnessCenter.phoneNum }} <br />
      Location: {{ fitnessCenter.location }} <br>
      <a v-bind:href="'/fitnessCenters/'+ fitnessCenter._id +'/rate'"><button>Rate</button></a>
      
    </p>
    <h2>Ratings</h2>
    <ol>
      <li v-for="rating in fitnessCenter.ratings" :key="rating">
        <p>
            Customer Name: {{ rating.Customer.userName }} <br>
            Point: {{ rating.point }} <br>
            Comment: {{ rating.comment }}
        </p>
      </li>
    </ol>
  </div>
</template>