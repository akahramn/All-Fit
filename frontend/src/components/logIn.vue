<script>
export default {
    name: "SignUp",
    data() {
        return {
            password: '',
            passwordFieldType: 'password'
        }
    },

    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
            
        }
    },
}
</script>

<template>
    <div>
        <p>Log In Page</p>
        <p>User Name: <input v-model="userName" placeholder="Ex: a.kahramnn"></p>
        <p>Password: <input :type="passwordFieldType" v-model="password" placeholder="***********"></p>
        <button type="password" @click="switchVisibility" >show / hide</button>
        
    </div>

</template>

<style>

</style>