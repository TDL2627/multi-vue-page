<template>
  <div id="projects">
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
    <h1 class="kop animate__animated animate__backInDown">PROJECTS</h1>
           <div class="box sb1">Browse left and right(refresh if nothing shows)</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/project/riddle.png" class="project-image" alt="image">
<p class="iden">1/29</p>
      <h2>Riddle Game</h2>
      <h4>Moderate</h4>
      <p>A riddle quiz game made with VUEjs.</p>
<div  id="link"
 style="display:flex;">
  <a target="_blank" href="https://github.com/TDL2627/Riddles" class="buttun">Git</a>
  <a target="_blank" href="https://riddles-73de4.web.app/" class="buttun">Live</a>
</div>
    </div>
    <div class="carousel-item" v-for="(project,index) in projects" :key="project.title">
    <img :src="require('@/assets/project/'+ project.img)" class="project-image">
     <p class="iden">{{index+2}}/29</p>
      <div class="content">
        <h2 class="project-title">
          {{ project.title }}
        </h2>
        <h4> {{project.level}}</h4>
       
        <p class="details">
          {{ project.description }}
        </p>
        <a :href="project.linkGit" target="_blank"  class="buttunz">GIT</a>
          <a :href="project.linkLive" target="_blank" class="buttunz">Live</a>
      </div>

    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- 6 -->

  </div>
  
  
</template>

<script>
export default {

  data() {
    return {
    projects: [ ],
    loader:false
    };
  },
async created () {
    this.loading = true
    try {
      const res = await fetch('https://portfolio-api2627.herokuapp.com/projects')
      this.projects = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
};
</script>

<style  scoped>
.buttun{
  background-color:#240046  ;
border:2px solid #FF7900;
color: white;
width: 50px !important;
margin: 5px;
padding: 5px;
text-decoration: none;
border-radius: 25px;
}
.buttun:hover{
  background-color: white;
  color: #FF7900;
  -webkit-box-shadow: -11px 5px 15px 5px #FF7900; 
box-shadow: -11px 5px 15px 5px #FF7900;

}
h1{
  
   color: #ff7900;
  text-decoration: underline 2px white ;
}
.iden{
  float: left;
  padding: 20px;
}
h4{
  color: #000;
}
h2,p{
  color:white;
}

.carousel{
  background: rgba( 255, 106, 4, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.carousel-item{
  padding-top: 20px;
  height: 65vh;
}
#projects{
 background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.png");
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
   padding-top: 8%;
}
.project-image{
  height: 250px;
  object-fit: cover;
  margin-left: -5%;
}
a{
  width: 150px !important;
}
#link{
  margin-left: 45%;
}
/* tip */
.box {
  width: 200px;
  z-index: 895675;
  background: #ff7900;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position: fixed;
  top: 125px;
  right: 25px;

  animation: hide 2s linear 2s 1 forwards;
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
#projects{
  padding-left:10px;
  padding-top:45px;
  padding-right: 10px;
}
.carousel-item{
  padding-bottom:20px;
}
.project-image{
  height: 200px;
  margin-left: 0;
  width: 100%;
}

p{
  height: 50px;
overflow-x: hidden;  
  overflow-y: hidden;
}
#link{
  margin-left: 45%;
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