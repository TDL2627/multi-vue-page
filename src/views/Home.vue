<template>
<!-- <Navbar/> -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';

export default {

  components: {
    HelloWorld,Navbar
  }
}
</script>
