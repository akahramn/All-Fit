import axios from 'axios'
//import { response } from 'express'
import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchCustomers(){
      const request = await axios.get(`http://localhost:3000/customers`)
      return request.data
    },
    async fetchFitnessCenters(){
      const request = await axios.get(`http://localhost:3000/fitnesscenters`)
      return request.date
    }
  }
  
})
