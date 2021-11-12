<script>
import { mapActions } from "vuex";

export default {
  
  name: "Login",
  data() {
    return {
      mail: "",
      passWord: "",
      passwordFieldType: "password",
      customer: {}
    };
  },

  methods: {
    ...mapActions(["fetchCustomers", "loginCustomer"]),

    switchVisibility() {
        this.passwordFieldType === "password" ? "text" : "password";
    },

    async login({ mail, passWord }) {
        this.customer = await this.loginCustomer({ mail, passWord })

        const userId = this.customer
        this.$router.push({ path: `/customers/${userId}` })
    },
  },
};
</script>

<template>
  <div>
    <p>Login Page</p>
    <p>Email: <input v-model="mail" placeholder="Ex: a.kahramnn" /></p>
    <p>
      Password:
      <input
        :type="passwordFieldType"
        v-model="passWord"
        placeholder="***********"
      /><button type="password" @click="switchVisibility">show / hide</button>
    </p>

    <button v-on:click="login({ mail: mail, passWord: passWord })">
      Login
    </button>

    <p>{{ mail }} --- {{ passWord }}</p>
  </div>
</template>

<style>
</style>