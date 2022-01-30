<template>
<div id="testi">
 <h1>This is the testimonials</h1>
  <div class="container">
    <div class="row">
<div class="col-lg-4" id="testimonials" v-for="person in people" :key="person.name">
 <img :src="person.pic" class="project-image">
      <div class="content">
        <h3 >
          {{ person.name }}
        </h3>
        {{person.title}}
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
        {name:"Jude",title:"Aspiring Web Developer",pic:require('@/assets/people/Jude3.jpg'),qoute:" 'He knows what is he doing.'"},
         {name:"Sibabalo",title:"Web Developer",pic:require('@/assets/people/Godwin.jpeg'),qoute:" 'A very creative and resourceful person.A great team player.'"},
          {name:"Bulela",title:"Aspiring Web Developer",pic:require('@/assets/people/Bulela1.jpg'),qoute:" He can work well with others."},
           {name:"Kischa",title:"Graphic Designer",pic:require('@/assets/people/Kischa4.jpg'),qoute:"He is very creative and has a great imagination."},

    ]
  }
}
}
</script>

<style>

</style>