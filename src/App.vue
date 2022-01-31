<template>
<Navbar/>
<router-view v-slot="{ Component }">
  <transition name="scale" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
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

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 background-color: #FF7900;
}
body{
  background-color: #FF7900;
}
* {
  font-family: "Comfortaa" !important;
}

.buttunz{
background-color:#240046  ;
border:2px solid #FF7900;
color: white;
width:150px;
margin: 10px;
padding: 10px;
text-decoration: none;
border-radius: 25px;
}
.buttunz:hover{
  background-color: white;
  color: #FF7900;
  -webkit-box-shadow: -11px 5px 15px 5px #FF7900; 
box-shadow: -11px 5px 15px 5px #FF7900;

}
/* width */
::-webkit-scrollbar {
  width: 20px;
}


/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF7900; 
  color: red;
  border-radius: 10px;
}


</style>
