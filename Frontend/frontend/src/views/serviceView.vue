<template>
    <div class="services bg-image">
        <div class="row justify-content-center">
            <div class="col-7 text-black m-5">
                <div class="row">
                    <div class="col-7 d-flex align-items-center" v-if="service">
                        <img :src="service.servicesUrl" class="car-img-top" alt="" height="380">
                    </div>
                    <div class="col-4 d-flex flex-column justify-content-between" id="divide" v-if="service">
                        <div class="d-flex flex-column align-items-start">
                            <h1 class="head"></h1>
                            <p class="lead opacity-75">""</p>
                            <h3 class="product-price"></h3>
                            <hr class=" w-100">
                            <div class="mbc">
                                <p> Amount: R</p>
                            </div>
                            <div class="col-2  mx-3">
        <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#AddProd"> </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="AddProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Book</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Book: </h5>
              <input type="text" placeholder="Name" class="form-control" required>
              <h5 class="text-start mt-2">Date : </h5>
              <button type="button" class="btn date" @click="openDatePopup">Date</button>
        <div class="date-popup" v-show="showDatePopup" id="date-popup">
    <h2>Select Dates</h2>
    <label for="checkin">Check-in:</label>
    <input v-model="checkinDate" type="date" id="checkin" @change="updateCheckoutMinDate" required>

    <label for="checkout">Check-out:</label>
    <input v-model="checkoutDate" type="date" id="checkout" :min="minCheckoutDate" required>

    <button type="button" @click="closeDatePopup">OK</button>
  </div>
              <h5 class="text-start mt-2">Rooms and Guests: </h5>
              <input  type="number" placeholder="Amount" class="form-control" required>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="book()" type="button" class="btn btn-dark">Book</button>
            </div>
          </div>
        </div>
      </div>



                            <!-- <div class="d-flex flex-column align-items-start">
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">
                                    Book
                                </button>
                            </div> -->
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
.head {
    text-transform: uppercase;
    font-family: 'DM sans';
    font-size: xx-large;
    color: #042f42;
}

.lead {
    font-size: medium;
}

.vue {
    position: absolute;
    margin-left: 70rem;
    margin-top: 15rem;
    transform: rotate(90deg);
}

.Portrait-btn {
    margin-bottom: 20px;
    border: 2px solid #042f42;
    color: #042f42;
    padding: 10px;
    background-color: transparent;
}

.w-100 {
    color: #042f42;
    size: 10px;
}

.services {
    overflow-y: hidden;
    overflow-x: hidden;
    /* background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px,transparent 2px, transparent 4px),linear-gradient(0deg, rgb(70, 143, 234),rgb(187, 235, 205)); */
}

.col-7 {
    width: fit-content;
}
</style>