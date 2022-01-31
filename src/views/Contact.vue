<template>
<div id="contact">
    <h1>CONTACT</h1>
       <div class="box sb1">Message me</div>
 <form target="_blank" action="https://formspree.io/f/mleavgwr" method="POST">
         
              <br>
               <input name="fname"
                  style="width:100%; margin-left: 2px; margin:20px; border-radius: 20px; border: none; height:40px; padding: 10px; "
                  type="text" placeholder="Name" required> <input name="email"
                  style="width:100%; margin:20px; border-radius: 20px; border: none; height:40px; padding: 10px; "
                  type="email" placeholder="Email" required> 

            <textarea name="messages" id="areatxt" cols="30" rows="10"
                  placeholder="Type your message" required></textarea> 
              <div style="display:flex"> <button class="send-but buttunz" type="submit">Send</button>
                <button  class=" buttunz" type="reset" value="Reset">Reset</button>
              </div>
            </form>
</div>




</template>

<script>
export default {
  

}

</script>

<style scoped>
#contact{
     background-color: #3c096c;
     height: 100vh;
     /* padding-top: 75px; */
    
}
form {
    max-width: 420px;
 
   
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
input,textarea{
  color: #ff7900;
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