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
    font-size:20px;
  color: #ff7900;
font-weight: bold;
text-decoration: underline ;
  animation-name: vibrate-1;
  animation-iteration-count: infinite;
  animation-duration: 0.5s;

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
.vibrate-1 {
	-webkit-animation: vibrate-1 0.3s linear infinite both;
	        animation: vibrate-1 0.3s linear infinite both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-2-23 16:6:19
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

</style>