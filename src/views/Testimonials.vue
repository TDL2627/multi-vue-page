<template>
<div id="testi">
 <h1>TESTIMONIALS</h1>
   <div class="box sb1">Scroll down</div>
  <div class="container">
    <div class="row">
<div class="col-lg-4 testimonials" v-for="person in people" :key="person.name">
 <img class="piks" :src="person.pic">
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
      {name:"Godwin",title:"Head of Curriculum and Learning",pic:require('@/assets/people/Godwin.jpeg'),qoute:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
       {name:"Jason",title:"Lecturer ",pic:require('@/assets/people/jason-wandrag-nobg-2.png'),qoute: "'Ashley brings a unique energy to my class. He enjoys participating in class activities. It's always great to see him well-behaved in my class. I am excited about Ashley's potential and I can't wait to see how he will grow in the future.'"},
        {name:"Sibabalo",title:"Web Developer",pic:require('@/assets/people/sibablo.jpg'),qoute:" 'A very creative and resourceful person. A great team player.'"},
       {name:"Jude",title:"Aspiring Web Developer",pic:require('@/assets/people/Jude3.jpg'),qoute:" 'He knows what is he doing.'"},
        
          {name:"Bulela",title:"Aspiring Web Developer",pic:require('@/assets/people/Bulela1.jpg'),qoute:"' He can work well with others.'"},
           {name:"Kischa",title:"Graphic Designer",pic:require('@/assets/people/Kischa4.jpg'),qoute:"'He is very creative and has a great imagination.'"},

    ]
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
  padding-top: 75px;
  padding-left: 100px;
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

/* media query */
@media only screen and (max-width: 600px) {
#testi{
  padding-bottom: 50px;
  padding-top: 50px;
  padding-left: 10px;
  padding-right:10px;
}
.testimonials{
  margin: 20px;
  width:250px; 
}
.piks{
  height: 200px;
  width: 250px;
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