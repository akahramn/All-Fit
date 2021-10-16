import axios from 'axios'
//import { response } from 'express'
import { createStore } from 'vuex'
axios.defaults.baseURL = 'http://localhost:3000'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchCustomers(){
      const request = await axios.get(`/customers`)
      return request.data
    },
    async fetchCustomer(ctx, customerId){
      const request = await axios.get(`/customers/${customerId}`)
      return request.data
    },
    async fetchFitnessCenters(){
      const request = await axios.get(`/fitnessCenters`)
      return request.data
    },
    async fetchFitnessCenter(ctx, fitnessCenterId){
      const request = await axios.get(`/fitnessCenters/${fitnessCenterId}`)
      return request.data
    },
    async addNewCustomer(ctx, {name, phoneNum, mail, age } ) {
      const request = await axios.post(`/customers`, { name, phoneNum, mail, age })
      return request.data
    }
  }
  
})
