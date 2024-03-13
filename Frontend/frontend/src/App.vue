<template>

  <div>
  
    <Navbar/>
      
        <main class="container-fluid">
          <router-view/>
       </main>  
   
    <!-- <Footer /> -->

</div>
  
</template>
<script>
import Navbar from './components/NavbarComp';
// import Footer from './components/Footer.vue';
// import Spinner from './components/Spinner.vue';

export default {
  components:{
    Navbar
    
  }
}
</script>
<style src="../src/assets/CSS/style.css" >



</style>