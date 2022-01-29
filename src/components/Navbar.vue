<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container-fluid">
  Kannemeyer
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
      <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link  to="/about">About</router-link>
        </li>
        <div class="nav-item">
    <router-link  to="/experience">Experience </router-link> 
        </div>
        <div class="nav-item">
<router-link  to="/skills">Skills </router-link>
        </div>
        <div class="nav-item">
  <router-link  to="/projects">Projects</router-link>
        </div>
        <div class="nav-item">
 <router-link   to="/testimonials">Testimonials</router-link>
        </div>
         <div class="nav-item">

        </div>
           <div class="nav-item">
      <router-link   to="/contact"><p>Contact</p></router-link>
        </div>
</ul>
  
    </div>
  </div>
</nav>

  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
       <router-link   to="/contact"><p>Contact</p></router-link>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid{
  background-color: #240046 !important;
  color: #ff7900;
  position: fixed;
  border-bottom-right-radius: 250px;
  top: 0;
  z-index: 100000;
}
ul{
  margin-left:25%;
}
/* router-link is just like the a tag */
a{
  text-decoration: none;
  color: #e0aaff;
 
}
a:hover{
  color: #ff7900;
}
.nav-item{
  margin: 10px;
  margin-top: 25px;
 
}


a.router-link-exact-active {
  color: #ff7900;
font-weight: bold;
text-decoration: underline ;
}
/* media query */
@media only screen and (max-width: 600px) {
.container-fluid{display: none !important;}
}
</style>