<template>
<div id="testi">
 <h1>TESTIMONIALS</h1>
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
       {name:"Jason",title:"Lecturer ",pic:require('@/assets/people/jason-wandrag-nobg-2.png'),qoute: "Ashley brings a unique energy to my class. He enjoys participating in class activities. It's always great to see him well-behaved in my class. I am excited about Ashley's potential and I can't wait to see how he will grow in the future."},
        {name:"Sibabalo",title:"Web Developer",pic:require('@/assets/people/sibablo.jpg'),qoute:" 'A very creative and resourceful person. A great team player.'"},
       {name:"Jude",title:"Aspiring Web Developer",pic:require('@/assets/people/Jude3.jpg'),qoute:" 'He knows what is he doing.'"},
        
          {name:"Bulela",title:"Aspiring Web Developer",pic:require('@/assets/people/Bulela1.jpg'),qoute:" He can work well with others."},
           {name:"Kischa",title:"Graphic Designer",pic:require('@/assets/people/Kischa4.jpg'),qoute:"He is very creative and has a great imagination."},

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
#testi{
background-color: #5a189a;
  padding-bottom: 100px;
  padding-top: 100px;
  padding-left: 100px;
}
.testimonials{
  height: 500px;
  background-color: #ff7900;
  padding: 0;
  margin: 20px;
  width:300px;
  border: 1px solid #ff7900;
}
.piks{
  height: 300px;
  background-color: white;
  width: 300px;
}
h3{
  color: white;
}
p{
  color: white;
  overflow: scroll;
  height: 100px;
  overflow-x: hidden;
}
</style>