<template>
 <form target="_blank" action="https://formspree.io/f/mleavgwr" method="POST">
              <h4 class="contact-head cnthead">Contact me:</h4>
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



</template>

<script>
export default {
  

}

</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
   
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}


.submit {
    text-align: center;
}
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}


</style>