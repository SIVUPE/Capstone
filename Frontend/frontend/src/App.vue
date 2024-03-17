<template>

  <div>
  
    <Navbar/>
      
        <main class="container-fluid">
          <router-view/>
       </main>  
   
    <Footer/>

</div>
  
</template>
<script>
import Navbar from './components/NavbarComp';
import Footer from './components/FooterComp.vue'
// import Spinner from './components/Spinner.vue';

export default {
  components:{
    Navbar,
    Footer
    
  }
}
</script>

<style >
.navbar{
  background-color: #29516a;
}
.footer-content,
.footer-contact {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  background-color: #29516a;
  color: #eee5df;
  padding: 5px; 
  font-size: 14px;
}

.footer-contact > li {
  display: inline-block;
  margin: 1em;
  font-size: 16px;
}
a:link {
    color: #a6a4cb;
  text-decoration: none;
  font-weight: bold;
}

/* visited link */
a:visited {
    color: #a6a4cb;
  text-decoration: none;
}

/* mouse over link */
a:hover {
    color: #dcdbeb;
  text-decoration: none;
}

/* selected link */
a:active {
    color: #a6a4cb;
    text-decoration: none;
}
</style>
