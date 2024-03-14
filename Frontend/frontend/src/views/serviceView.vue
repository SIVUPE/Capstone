<template>
    <div class="product bg-image">
        <div class="row justify-content-center">
           <div class="col-7 text-black m-5">
               <div class="row" >
                {{ service }}
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

</style>