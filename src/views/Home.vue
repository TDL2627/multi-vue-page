<template>
<div id="intro">
  <h1>Welcome</h1>
</div>

  <div class="home">
  

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
</style>