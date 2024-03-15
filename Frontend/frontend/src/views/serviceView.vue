<template>
    <div class="services bg-image">
        <div class="row justify-content-center">
           <div class="col-7 text-black m-5">
               <div class="row" >
                   <div class="col-7 d-flex align-items-center" v-if="service">
                    <img :src="service.servicesUrl" class="car-img-top" alt="" height="380">
                   </div>
                   <div class="col-4 d-flex flex-column justify-content-between" id="divide" v-if="service">
                       <div class="d-flex flex-column align-items-start">
                           <h1 class="head">{{ service.serviceName }}</h1>
                           <p class="lead opacity-75">"{{ service.serviceDescription }}"</p>
                           <h3 class="product-price"></h3>
                           <hr class=" w-100">
                           <div class="mbc">
                               <p> Amount: R{{ service.price }}</p>
                           </div>
                       </div>
                       <div class="d-flex flex-column align-items-start">
                           <button class="Portrait-btn p-2 ">Book</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
   </template>

<script>
// import store from 'vuex'
    export default {
        computed: {
            service() {
                return this.$store.state.service
            }
        },
        mounted() {
            this.$store.dispatch("fetchService", this.$route.params)
            console.log('On mounted: ', this.service);
            console.log('params id: ', this.$route.params);
        }
    }
</script>

<style scoped>
   .head{
    text-transform:uppercase;
  font-family: 'DM sans';
  font-size: xx-large;
  color: #AF8C53;
   }
   .lead{
    font-size:medium;
   }
   .vue{
       position: absolute;
       margin-left: 70rem;
       margin-top: 15rem;
       transform: rotate(90deg);
   }
   .Portrait-btn {
       margin-bottom: 20px;
       border: 2px solid #AF8C53;
    color: #AF8C53;
  padding:  10px;
  background-color: transparent;
   }
   .w-100{
    color: #AF8C53;
    size: 10px;
   }
   .services {
       overflow-y: hidden;
       overflow-x: hidden;
   }
   .col-7{
    width: auto;
   }
   </style>