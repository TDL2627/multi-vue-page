<template>
  <div class="about">

    <div class="container page">
      
    <h1>ABOUT</h1>
<div class="row">
<div class="col-lg-6 cod1">
<h3>Description</h3>
<div class="text">
<p>
  I am a smart, hardworking person and very eager to learn.       
  I love solving problems,
    I am accustomed to traveling a lot and speak multiple languages which allows me to mix and work well with others. I am very passionate about everything I do and take pride in what I do.
</p>
<br>
<p>
  I have 3 years of coding experience which I have acquired via self-learning, tertiary institutions and multiple work environments. I find coding very interesting and believe it is my super power.
</p>
<br>
<p>
  I am well experienced in coding and able to work well with others.
</p>

</div>
</div>
<div class="col-lg-6 col-sm-12 cod2">
<h3>Details</h3>
<div class="three">
  <img class="mini" src="../assets/people/me.jpg" alt="me">
  <p>NAME   : Abdul-Malik </p> 

<br>
<p>SURNAME: Kannemeyer</p>

<br>
<p class="email">EMAIL  : ashleykannemeyer2@gmail.com</p> 

<br>
<p>AGE    : 21</p>

<br>
<p>FROM   : Cape Town</p>
<br>
<a class="buttunz" href="../assets/Resume.pdf">Download CV</a>
</div>
<div class="container two">
    <img class="mini-me" src="../assets/people/me.jpg" alt="me">
<div class="row">

<div class="col-lg-4 ">
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

</div>

<a class="buttunz" href="../assets/Resume.pdf">Download CV</a>
</div>
</div>

</div>

</div>
    </div>

</div>

 


</template>



<style scoped>
.about
{ padding-top: 25px;
 background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.png");
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

.mini-me{
  height: 150px;
  width: 150px;
  position: fixed;
  right:190px;
  top:200px;
  border: #ff7900 solid 2px;
  border-radius: 25px;
}

.mini{
   height: 150px;
     border: #ff7900 solid 2px;
  border-radius: 25px;
  width: 150px;
}

.three{
  display: none;
  text-align: center;
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
.mini-me{
  position: relative;
}
.two{
  display: none;
}
.three{
  text-align: center;
  display: initial;
}
.email{
 font-size: 13px;
}
}
</style>