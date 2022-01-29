<template>
<Navbar/>

  <router-view/>
  <Footer/>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {

  components: {
    Navbar,Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
* {
  font-family: "Comfortaa" !important;
}

.buttunz{
background-color:#240046  ;
border:2px solid #FF7900;
color: white;
width:100px;
margin: 10px;
padding: 10px;
border-radius: 25px;
}
.buttunz:hover{
  background-color: white;
  color: #FF7900;
  -webkit-box-shadow: -11px 5px 15px 5px #FF7900; 
box-shadow: -11px 5px 15px 5px #FF7900;

}



</style>
