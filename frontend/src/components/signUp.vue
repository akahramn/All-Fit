<script>
import {mapActions} from 'vuex'
var name, mail, age, phoneNum;

export default {
    name: 'SignUp',

    data () {
        return {
            
            name,
            mail,
            age ,
            phoneNum,
        }
    },

    methods: {
        ...mapActions(['addNewCustomer']),
        
        async register({name, phoneNum, mail, age }) {
            await this.addNewCustomer({name, phoneNum, mail, age })
            alert('SUCCESSFUl')
        }
    },
};
</script>

<template>
  <div>
    <p>Name</p>
    <input v-model="name" placeholder="Ex: John" />
    <p>Mail</p>
    <input v-model="mail" placeholder="john@gmail.com" />
    <p>Age</p>
    <input v-model="age" placeholder="22" />
    <p>Phone Number</p>
    <input v-model="phoneNum" placeholder="5523761876" /> <br />
    <br />
    <button v-on:click="register({name: name, phoneNum: phoneNum, mail: mail, age: age })">Register</button>
    <p>{{ name }}, {{ age }}</p>
  </div>
</template>
