<template>
<div id="nav">
 <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/experience">Experience</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
      <router-link to="/contact">Contact</router-link>
       
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #006466;
  
}
</style>