<template>
  <div id="projects">
    <h1 class="kop">PROJECTS</h1>
           <div class="box sb1">Browse left and right(refresh if nothing shows)</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/project/reactor.png" class="project-image" alt="image">
      <p class="iden">0/16</p>
      <h2>Reactor</h2>
      <h4>Moderate</h4>
      <p>A reaction game made with VUEjs.</p>
<div  id="link"
 style="display:flex;">
  <a target="_blank" href="https://github.com/TDL2627/ReactGame" class="buttun">Git</a>
  <a target="_blank" href="https://reactor2627.web.app/" class="buttun">Live</a>
</div>
    </div>
    <div class="carousel-item" v-for="(project,index) in filteredprojects" :key="project.title">
    <img :src="project.img" class="project-image">
     <p class="iden">{{index}}/16</p>
      <div class="content">
        <h2 class="project-title">
          {{ project.title }}
        </h2>
        <h4> {{project.level}}</h4>
       
        <p>
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

  </div>
  
  
</template>

<script>
export default {
  data() {
    return {
      sortBy: 'alphabetically',
    projects: [
    {title: 'Anime', description: 'A basic animation made with HTML and CSS.', level:"Moderate",img: require("@/assets/project/anime.png"),linkGit:"https://github.com/TDL2627/basic-anime",linkLive:"https://tdl2627-anime.netlify.app/"},
 {title: 'Clock', description: 'A clock that greets made with HTML,Javascript and CSS.', level:"Basic",img: require("@/assets/project/clock.png"),linkGit:"https://github.com/TDL2627/clock",linkLive:"https://tdl2627-clock.netlify.app/"},
  {title: 'Charizard', description: 'A fan page created using fetch API.', level:"Moderate",img: require("@/assets/project/charizard.png"),linkGit:"https://github.com/TDL2627/charizard",linkLive:"https://tdl2627-charizard.netlify.app/"},
 {title: 'Swegga', description: 'A web app that does cart operations.', level:"Moderate",img: require("@/assets/project/swegga.png"),linkGit:"https://github.com/TDL2627/swegga",linkLive:"https://tdl2627-swegga.netlify.app/"},
 {title: 'Omnibar', description: 'A unique navbar I created myself.', level:"Moderate",img: require("@/assets/project/omni.png"),linkGit:"https://github.com/TDL2627/omniBar",linkLive:"https://omnibar.netlify.app/"},
  {title: 'Quiz', description: 'A riddle game made with HTML,PHP and CSS.', level:"Advanced",img: require("@/assets/project/quiz.png"),linkGit:"https://github.com/TDL2627/quiz",linkLive:"https://tdl2627-quiz.herokuapp.com/"},
   {title: 'Mock site', description: 'A duplicate website made with HTML and CSS.', level:"Basic",img: require("@/assets/project/doob.png"),linkGit:"https://github.com/TDL2627/doob-single-page",linkLive:"https://tdl2627-a-single-page.netlify.app/"},
 {title: 'Cards', description: 'Basic cards made with HTML and CSS.', level:"Basic",img: require("@/assets/project/card.png"),linkGit:"https://github.com/TDL2627/basic-cards",linkLive:"https://tdl2627-cards.netlify.app/"},
  {title: 'Calculator', description: 'A basic calculator made with Javascript, HTML and CSS.', level:"Moderate",img: require("@/assets/project/calculator.png"),linkGit:"https://github.com/TDL2627/calculator",linkLive:"https://tdl2627-calculator.netlify.app/"},
 {title: 'Blog App', description: 'This is a colabrative full MEAN stack blog application that was made with Angular,HTML,BOOTSTRAP,CSS,NODE JS ,FIRE BASE and JavaScript. Here you can login and share your coding experience.', level:"Advanced",img: require("@/assets/project/blog.png"),linkGit:"https://github.com/TDL2627/blog-app",linkLive:"https://tech-path.herokuapp.com/landing-page/"},
 {title: 'Single Page', description: 'A basic website made with Bootstrap, HTML and CSS.', level:"Moderate",img: require("@/assets/project/single.png"),linkGit:"https://github.com/TDL2627/single-page",linkLive:"https://tdl2627-single-page.netlify.app/"},
  {title: 'Form', description: 'A basic functional form made with HTML and CSS.', level:"Basic",img: require("@/assets/project/form.png"),linkGit:"https://github.com/TDL2627a-/basic-form",linkLive:"https://tdl2627-form.netlify.app/"},
   {title: 'Business', description: 'One of my first made with HTML and CSS.', level:"Basic",img: require("@/assets/project/interior.png"),linkGit:"https://github.com/TDL2627/inerterior",linkLive:"https://interior-tdl2627.netlify.app/"},
 {title: 'Temp Converter', description:'A temperature converter made with Javascript, HTML and CSS.', level:"Moderate",img: require("@/assets/project/tempConvert.png"),linkGit:"https://github.com/TDL2627/temperature-converter",linkLive:"https://tdl2627-temp-convert.netlify.app/"},
  {title: 'Ecommerce Demo', description: 'A simple crud ecommerce site made with HTML and CSS.', level:"Advanced",img: require("@/assets/project/guns.png"),linkGit:"https://github.com/TDL2627/advanceCrud",linkLive:"https://guns-2627.netlify.app/"},
 {title: 'Pokemon', description: 'Cards made with data fetched from api, HTML and CSS.', level:"Moderate",img: require("@/assets/project/pokedex.png"),linkGit:"https://github.com/TDL2627/pokedex",linkLive:"https://tdl2627-pokedex.netlify.app/"}
 
    ]
    };
  },
  computed: {
  filteredprojects() {
    let tempprojects = this.projects
    
       
    // Sort by alphabetical order
        tempprojects = tempprojects.sort((a, b) => {
            if (this.sortBy == 'alphabetically') {
                let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          
              if (fa < fb) {
                return -1
              }
              if (fa > fb) {
                return 1 
              }
              return 0
              
            } 
        })
    
       
        
        return tempprojects
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
  float: right;
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
}
p{
  height: 50px;
overflow-x: hidden;  
  overflow-y: hidden;
}
#link{
  margin-left: 25%;
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