<template>
<div id="intro">
  <h1>Welcome</h1>
</div>

  <div class="home">
  
<img src="../assets/people/me.png" alt="me">
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue';

export default {

  components: {
    Navbar
  }
}
</script>
<style  scoped>
.home{
background-color: #9d4edd;
height: 95vh;
}
h1{
  color:white;
  margin-top:15%;
  font-size: 150px;
}
#intro {
  background-color: #5a189a;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2334;
  top: 0;
  left: 0;
    animation: hide 1s linear 2s 1 forwards;
}

@keyframes hide {
    to {
    z-index: -444;
        opacity: 0;
    }
}

@keyframes myAnim {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>