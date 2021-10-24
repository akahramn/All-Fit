<script>
import {mapActions} from 'vuex'
var userName, mail, passWord;

export default {
    name: 'Register',

    data () {
        return {
            userName,
            mail,
            passWord,
            passwordFieldType: "password"
        }
    },

    methods: {
        ...mapActions(['addNewCustomer']),

        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
        
        async register({ userName, mail, passWord }) {
            await this.addNewCustomer({ userName, mail, passWord })
            alert('SUCCESSFUl')
        }
    },
};
</script>

<template>
  <div>
    <p>User Name</p>
    <input v-model="userName" placeholder="kingJohn" />
    <p>Mail</p>
    <input v-model="mail" placeholder="john@gmail.com" />
    <p>Password</p>
    <input :type="passwordFieldType" v-model="passWord" placeholder="***********">
    <button type="password" @click="switchVisibility">show / hide</button>
    <br />
    <a href="http://localhost:8080/logIn"><button v-on:click="register({ userName: userName, mail: mail, passWord: passWord })">Register</button></a>
    <p>{{ userName }}, {{ mail }}, {{ passWord }} </p>
  </div>
</template>
