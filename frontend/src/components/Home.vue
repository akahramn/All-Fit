<script>
export default {
   name: 'Home',
   props: {
       msg: String
   }
}
</script>

<template>
    <div>
        <h2>Welcome to All-Fit App</h2>
        <a href="http://localhost:8080/register">Register</a> <br>
        <a href="http://localhost:8080/logIn">Log In</a>
    </div>
    
</template>