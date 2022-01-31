<template>
<div id="footer">
 <p>Developed by Kannemeyer</p>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
#footer{
    width: 100%;
    position: fixed;
    z-index: 10000;
    bottom: 0;
    border-top-left-radius: 150px;
    height: 60px;
    background: rgba( 34, 0, 52, 0.65 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );

border: 1px solid rgba( 255, 255, 255, 0.18 );
}
p{
    margin-top: 15px;
    color: #ff7900;
}
</style>