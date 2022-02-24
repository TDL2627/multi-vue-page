<template>
<div id="testi">
 <h1 class="kop">TESTIMONIALS</h1>
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
    people:[
      

    ]
  }
}
,
  created(){
    fetch('https://portfolio-api2627.herokuapp.com/testimonials')
    .then((res) => res.json())
    .then(data => this.people = data )
    .catch(err => console.log(err.message))
  },
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
height: max-content;
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
margin-left: 10%;
}
/* media query */
@media only screen and (max-width: 600px) {
#testi{
  padding-bottom: 50px;
  padding-top: 50px;
  overflow: hidden;
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