<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>

      
      </ul>
  
    </div>
  </div>
</nav>
<div id="nav">
 <router-link to="/">Home</router-link> |
    <router-link  to="/about"><p>About</p></router-link> |
    <router-link  to="/experience">Experience</router-link> |
    <router-link  to="/skills">Skills</router-link> |
    <router-link  to="/projects">Projects</router-link> |
    <router-link   to="/testimonials">Testimonials</router-link> |
      <router-link   to="/contact">Contact</router-link>
       
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-linker{
  color:white;
}
#nav {
  padding: 30px;
  background-color: #9d4edd;
  color: white;
}

#nav a {
  font-weight: bold;
  color: black;
}


#nav a.router-link-exact-active {
  color: #006466;
  
}
</style>