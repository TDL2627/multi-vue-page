<template>
  <div id="projects">
    <h2>My projects:</h2>
    
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/project/reactor.png" alt="image">
      <h3>Reactor</h3>
      <p>Moderate-</p>
      <p>A reaction game made with VUEjs.</p>
<div style="display:flex; position:center;">
  <a target="_blank" href="https://github.com/TDL2627/ReactGame" class="buttunz">Git</a>
  <a target="_blank" href="https://reactor2627.web.app/" class="buttunz">Live</a>
</div>
    </div>
    <div class="carousel-item" v-for="project in filteredprojects" :key="project.title">
    <img :src="project.img" class="project-image">
      <div class="content">
        <h1 class="project-title">
          {{ project.title }}
        </h1>
        {{project.level}}
        <p>
          {{ project.description }}
        </p>
        <a :href="project.linkGit" target="_blank" class="buttunz">GIT</a>
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
  {title: 'Quiz', description: 'A riddle game made with HTML,PHP and CSS.', level:"Advaanced",img: require("@/assets/project/quiz.png"),linkGit:"https://github.com/TDL2627/quiz",linkLive:"https://tdl2627-quiz.herokuapp.com/"},
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
#projects{
  background-color: #5a189a;
  height: 100vh;
}
.project-image{
  height: 400px;
}
</style>