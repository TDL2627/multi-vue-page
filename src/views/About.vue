<template>
  <div class="about">

    <div class="container page">
      
    <h1>ABOUT</h1>
<div class="row">
<div class="col-lg-6 cod1">
<h3>Description</h3>
<div class="text">
<p>
  I am a smart, hard working person and very eager to learn.      
  I love solving problems,
    I am accustomed to traveling alot and speak multiple languages which allows me to mix and work well with others.I am very passionate about everything I do and take pride in what I do.
</p>
<br>
<p>
  I have 3 years of coding experience which I have acquired via self-learning, tertiary institutions and multiple work enviroments.I find coding very interesting and beleive it is my super power.
</p>
<br>
<p>
  I am well experienced in coding and able to work well with others.
</p>

</div>
</div>
<div class="col-lg-6 cod2">
<h3>Details</h3>
<div class="container">
<div class="row">
<div class="col-4">
<p>NAME   :</p> 
<br>
<p>SURNAME:</p>
<br>
<p>EMAIL  :</p>
<br>
<p>AGE    :</p>
<br>
<p>FROM   :</p>

</div>



<div class="col-8">
<p>Abdul-Malik</p>
<br>
<p>Kannemeyer</p>
<br>
<p>ashleykannemeyer2@gmail.com</p>
<br>
<p>21</p>
<br>
<p>Cape Town</p>
<a class="buttunz" href="../assets/Resume.pdf">Download CV</a>
</div>


</div>
</div>

</div>

</div>
    </div>





</div>

 


</template>

<script>
export default {
  
}
</script>

<style scoped>
.about
{ padding-top: 25px;
background-color: #280549;
  height: 100vh !important;

}
h1{
  
   color: #ff7900;
  text-decoration: underline 2px white ;
}
h3{
  padding-top: 20px;
  color: white;
  text-decoration: underline #ff7900;
}

.text{
  padding:20px;
  padding-top: 50px;
}
.container{
    padding:20px;
  padding-top: 50px;
}
.cod1{
  width: 50%;
  background-color: #5a189a;
}
.cod2{
  background-color: #3c096c;
  width: 50%;
}
p{
  color: white;
  text-align: start;
}






/* media query */
@media only screen and (max-width: 600px) {
.about{
 height: 100% !important;
 padding-bottom: 50px;
}
.cod1,.cod2{
  width: 100%;
}
}
</style>