<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
      passwordFieldType: "password",
      customers: [],
    };
  },

  async mounted () {
      this.customers = await this.fetchCustomers();
  },

  methods: {
    ...mapActions(["fetchCustomers"]),

    switchVisibility() {
        this.passwordFieldType === "password" ? "text" : "password";
    },

    async login(userName, passWord) {
        
        if (this.customers.find(userName) == userName) {
        alert("succesful");
      } else alert("FAİL");
    },
  },
};
</script>

<template>
  <div>
    <p>Login Page</p>
    <p>User Name / Email: <input v-model="userName" placeholder="Ex: a.kahramnn" /></p>
    <p>
      Password:
      <input
        :type="passwordFieldType"
        v-model="passWord"
        placeholder="***********"
      /><button type="password" @click="switchVisibility">show / hide</button>
    </p>
    <button @click="login((userName = userName), (passWord = passWord))">
      Login
    </button>
  </div>
</template>

<style>
</style>