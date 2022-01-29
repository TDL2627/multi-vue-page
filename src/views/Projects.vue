<template>
  <h1>This is the projects</h1>
  <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
</template>


<script>
export default {
  
  // el: '#example-1',
  // data: {
  //   items: [
  //     { message: 'Foo' },
  //     { message: 'Bar' }
  //   ]
  // }

  // mounted() {
  //   let externalScript = document.createElement('script')
  //   externalScript.setAttribute('src', '../assets/js.script.js')
  //   document.head.appendChild(externalScript)
  // }

}

</script>




<style>

</style>