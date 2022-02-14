<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container-fluid">
  Kannemeyer

<button class="btn btn-primary " id="offie" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span class="navbar-toggler-icon"></span></button>
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
      <router-link   to="/contact"><p>Contact</p></router-link>
        </div>
</ul>
    </div>
    
  </div>
</nav>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
   <img class="nav-logo" src="@/assets/icons/logo.png" alt="">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
      <router-link   to="/contact"><p>Contact</p></router-link>
        </div>
</ul>
  </div>
</div>
  

</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid{
background: rgba( 34, 0, 52, 0.65 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );

border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: #ff7900;
  position: fixed;
  border-bottom-right-radius: 250px;
  top: 0;
  z-index:9999999999999999999999710000525457;
}
#offie{
  display: none;
}
.offcanvas-body{
  background-color: #3c096c;
     border-bottom-left-radius: 250px !important;
}
.offcanvas{
    width: 50%;
     border-bottom-left-radius: 250px !important;
     z-index: 10000000000000000000000000;
}
.offcanvas-header{
  background-color: #280549;
}
ul{
  margin-left:25%;
}
/* router-link is just like the a tag */
a{
  text-decoration: none;
  color: whitesmoke;
 
}
a:hover{
  color: #ff7900;
}
.nav-item{
  margin: 10px;
  margin-top: 25px;
 
}
.nav-logo{
  height: 50px;
}

a.router-link-exact-active {
  color: #ff7900;
font-weight: bold;
text-decoration: underline ;
}
button{
  border: none;
  margin-right: 20px;
  background-color: #ff7900 !important;
}
/* media query */
@media only screen and (max-width: 600px) {
.container-fluid{
  border-bottom-right-radius: 200px;
}
#offie{
  display: initial;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
    color: #fff;
     background-color: none; 
     border-color: #280549 !important; 
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
}
}
</style>