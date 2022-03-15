<template>
<div id="contact">
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
             <h1>Contact me</h1>
       <div class="box sb1">Message me</div>
       <div class="container">

        
         <div class="row">
           <div class="col-lg-6 c1">
       
             <div id="c1">
<form @submit.prevent="handleSubmit">
              <br>
               <input name="fname" type="text" placeholder="Name" v-model="name" required>
                <input name="email" type="email" placeholder="Email" v-model="email" required> 

            <textarea name="messages" id="areatxt" cols="30" rows="8"
                  placeholder="Type your message" v-model="message" required></textarea> 
              <div style="display:flex"> 
                <button class="send-but buttunz" type="submit">Send</button>
                <button  class=" buttunz" type="reset" value="Reset">Reset</button>
              </div>
            </form>
             </div>

           </div>
            <div class="col-lg-6">
         
              <div id="c2">
                
              <h5>Address : </h5>
              <p>Athlone, Cape Town, 7764, South Africa</p>
              <h5>Phone :</h5>
              <p>0660400809</p>
              <h5>Email :</h5>
              <p>ashleykannemeyer2@gmail.com</p>
              <ul>
                <li>
                    <h5>WhatsApp :</h5>
              <a id="wapp" target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>
              <h5>LinkedIn :</h5>
              <a id="lapp" target="_blank" href="https://www.linkedin.com/in/ashley-kannemeyer-01b37121b/"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"/></a>
                </li>
              </ul>
        
            
       
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
  name:"",
  email:"",
  message:"",
  loading:false
    }

  },
  methods:{
     
  async  handleSubmit(){
    this.loading = true
    try{
 fetch('https://contact2627.herokuapp.com/contact', {
  method: 'POST',
  body: JSON.stringify({
  name: this.name,
  email: this.email,
    message: this.message
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((json) => {
     this.loading = false
    alert("Message Sent")
   this.name = '',
    this.email = '',
    this.message = ''
  });
    }
  catch(err)  {
          alert(err);
          this.loading = false
        }
  }

  }


}

</script>

<style scoped>



h1,h3{
   color: #ff7900;
  text-decoration: underline 2px white ;
}

h5{
  color: #ff7900;
}
p{
 color: white;
}
#contact{
      background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.png");
     height: 100vh;
  
     padding-top: 7%;
}
#c1{
 padding-left: 20% !important;
}
#c2{
  padding-top:25px;
}
form {
    max-width: 420px;
  margin: 0;
    text-align: left;
    border-radius: 10px;
}
input,textarea{
  color: #ff7900;
  width: 300px;
  margin: 10px;
  border-radius: 25px;
  border: none;
  padding: 10px;
}

.submit {
    text-align: center;
}
.error {
    color: #ff7900;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
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

@media only screen and (max-width:700px) {
  #contact{
    height: max-content ;
    padding-bottom: 100px;
      padding-top: 15%;
  }
  #c1{
   padding-left: 10%;
  padding-bottom:40px;
}
#c2{
  margin-top: 20px !important ;
}
input,textarea{
  width: 250px;
}
}
@media only screen and (min-height: 700px) {
#contact{
      background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.png");
     height: 100vh;
   
    
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