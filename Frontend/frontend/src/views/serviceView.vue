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
                           <div class="d-flex flex-column align-items-start">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Book
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    Some text in the modal
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>


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
  color: #042f42;
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
       border: 2px solid #042f42;
    color: #042f42;
  padding:  10px;
  background-color: transparent;
   }
   .w-100{
    color: #042f42;
    size: 10px;
   }
   .services {
       overflow-y: hidden;
       overflow-x: hidden;
       /* background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px,transparent 2px, transparent 4px),linear-gradient(0deg, rgb(70, 143, 234),rgb(187, 235, 205)); */
   }
   .col-7{
    width: fit-content;
   }
   </style>