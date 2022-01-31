<template>
  
<div id="exp">
<h1>EXPERIENCE</h1>

  <section class="time-line-box">
            <div class="swiper-container text-center"> 
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">01/2013</span></div>
                      <div class="status"><span>Enrolled into high school.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">11/2017</span></div>
                      <div class="status"><span>Matriculated + part time catering work.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">01/2018</span></div>
                      <div class="status"><span>Become a full time general worker.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">12/2019</span></div>
                      <div class="status"><span>Still doing general labour.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">06/2020</span></div>
                      <div class="status"><span>Enrolled at CodeSpace.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">01/2021</span></div>
                      <div class="status"><span>Uber Eats driver.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">04/2021</span></div>
                      <div class="status"><span>Developed microapps for Ayoba.</span></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="timestamp"><span class="date">09/2021</span></div>
                      <div class="status"><span>Enrolled at Life Choices</span></div>
                    </div>
                </div>
                <div class="swiper-pagination" style="cursor: move;"> </div>
            </div>
            
       </section>
       <div class="box sb1">Scroll Right</div>
       </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{

  color: #ff7900;
  text-decoration: underline 2px white ;
}
#exp{
  height: 100vh;
  padding-top: 75px;
  padding-left: 100px;
  padding-right: 100px;
    background-color: #5a189a
}
.time-line-box {
  margin-top: 90px;
  height: 300px; 
  padding: 100px 0;
  width: 100%;
background: rgba( 144, 19, 254, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 10px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.time-line-box .timeline {
  list-style-type: none;
  display: flex;
  padding: 0;
  text-align: center;
}
span{
  font-size: 20px !important;
  color: white;
}
.time-line-box .timestamp {
  margin: auto;
  margin-bottom: 5px;
  padding: 0px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-line-box .status {
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  border-top: 3px solid gray;
  position: relative;
  transition: all 200ms ease-in;
}
.time-line-box .status span {
  padding-top: 8px;
}
.time-line-box .status span:before {
  content: '';
  width: 12px;
  height: 12px;
  background-color: gray;
  border-radius: 12px;
  border: 2px solid #ff7900;
  position: absolute;
  left: 50%;
  top: 0%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 200ms ease-in;
}

.swiper-container {
  width: 95%; 
  margin: auto;

  overflow-y: auto;
}
.swiper-wrapper{
  display: inline-flex;
  flex-direction: row;
  overflow-y:auto;
  justify-content: center;
}
.swiper-container::-webkit-scrollbar-track{
   background:#a8a8a8b6;
   
   
}
.swiper-container::-webkit-scrollbar{
  height: 20px;
  
}
.swiper-container::-webkit-scrollbar-thumb{
   background: #ff7900 !important;
}
.swiper-slide {
  text-align: center;
  font-size: 12px;
  width: 200px;
  height: 100%;
  position: relative;

}
#scroll{
  color: #ff7900 ;
  margin-top: 20px;
  font-size: 20px;
  
}
/* tip */
.box {
  width: 200px;
 
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

/* animation */
.wobble-hor-bottom {
	-webkit-animation: wobble-hor-bottom 0.8s both;
	        animation: wobble-hor-bottom 0.8s both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-1-25 15:22:14
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation wobble-hor-bottom
 * ----------------------------------------
 */
@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}
.slide-in-right {
	-webkit-animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
	        animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-1-31 9:56:46
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-right
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }

  
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
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