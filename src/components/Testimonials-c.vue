<template>
<div id="testi">
  <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>

 <h1 class="kop animate__animated animate__backInDown">TESTIMONIALS</h1>
   <div class="box sb1">Scroll down</div>
  <div class="container">
    <div class="row">
<div class="col-lg-4 col-sm-12 testimonials" v-for="person in people" :key="person.name">
 <img class="piks" :src="require('@/assets/people/'+ person.pic)">
      <div class="content">
        <h3 >
          {{ person.name }}
        </h3>
      <h5> {{person.title}}</h5> 
        <p>
          {{ person.qoute }}
        </p>
</div>
</div>

    </div>
  </div>

</div>
 


</template>

<script>
export default {

data(){
  return{
    people:[],
    loading:false
  }
},
async created () {
    this.loading = true
    try {
      const res = await fetch('https://portfolio-api2627.herokuapp.com/testimonials')
      this.people = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>

<style scoped>
h1{
   color: #ff7900;
  text-decoration: underline 2px white ;
}
h5{
  color: #ff7900;
}
#testi{
 background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.png");
  padding-bottom: 100px;
 padding-top: 8%;
 width: 100%;
 overflow-x: hidden ;
height: 100vh;
overflow-y:scroll;
}
.testimonials{
  height: 400px;
 background: rgba(128, 49, 231, 0.45);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 0;
  margin: 20px;
  width:300px;
  
}
.piks{
  height: 200px;
  background-color: white;
  width: 300px;
   object-fit: cover;
}
h3{
  color: white;
}
p{
  color: white;
  
  height: 100px;
  overflow-x: hidden;
}
/* tip */
.box {
  width: 200px;
  z-index: 85595947;
  background: #ff7900;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position: fixed;
  top: 125px;
  right: 25px;

  animation: hide 1s linear 2s 1 forwards;
}

.sb1:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #ff7900;
  border-right: 10px solid transparent;
  border-top: 10px solid #ff7900;
  border-bottom: 10px solid transparent;
  right: -19px;
  top: 6px;
}
.container{
width:80%;
}
/* loader */
.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
      z-index: 2345678999999876543;
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
     position: fixed;
      top:45%;
      left: 50%;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: #FF7900;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #240046;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }
/* media query */
@media only screen and (max-width: 600px) {
#testi{
  padding-bottom: 50px;
  padding-top: 50px;
 height: 100vh;
overflow-y:scroll;
width: 100%;
}
.testimonials{
  margin: 20px;
  margin-left: 35px;
  width:250px; 
}
.piks{
  height: 200px;
  width: 250px;
}
.container{
margin:0;
}
}


/* animation */
@keyframes hide {
    to {
    z-index: -444;
        opacity: 0;
    }
}
@keyframes showing{
  to{
    opacity: 1;
  }
}
</style>