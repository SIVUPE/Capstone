<template>
    <div class="main">
        <div class="container ">
                <div class="row ">
            <div class="col">
                <button class="btn ">Sorting by price</button>
            </div>
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control" >
            </div>
            <div class="col">
                <button class="btn ">Filter by items</button>
            </div>
            </div>
        <div class="products">
            <div class="row mx-5 gap-5 justify-content-center  " v-if="services">
            <Card v-for="service in services" :key="service.servicesID" class="mb-3 ">
                <template #cardHeader>
                    <img :src="service.servicesUrl" class="car-img-top" alt="image" height="200">
                    <h4 class="card-title">{{ service.serviceName }}</h4>
                    <h6 class="card-title">{{ service.serviceDescription }}</h6>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark  p-2">
                        Amount: R{{ service.price }}
                    </p>
                    
            
                    <router-link :to="{name: 'service', params: {id: service.serviceID}}">View More</router-link>
                </template>
            </Card>
        </div>
        <div class="row" v-else>
            <p class="lead">Loading</p>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ServicesView',
    components: {
        Card
    },
    computed: {
        services() {
            return this.$store.state.services;
        }
    },
    mounted() {
        this.fetchServices();
    },
    methods: {
        async fetchServices() {
            try {
                await this.$store.dispatch('fetchServices');
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }
    }
}
</script>
<style scoped>
.products{
    margin-top:110px ;
}
.form-control{
    width: 290px;
    margin-left: 70px;
}
.btn {
  border: 2px solid #f4f2ee;
  color: #403e3a;
  padding:  10px;
  background-color: transparent;
  margin-left: 50px;
}
.main{
    height: 350vh;
    background-color:#252926 ;
}
.mb-3 {
  border: 2px solid #AF8C53;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.card-title,
.card-text {
  text-transform: uppercase;
  font-family: 'DM sans';
  font-size: medium;
  color: #AF8C53;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
</style>