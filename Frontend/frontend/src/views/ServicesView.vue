<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success">Sorting by price</button>
            </div>
        </div>
        <div class="row" v-if="services">
            <Card v-for="service in services" :key="service.serviceID">
                <template #cardHeader>
                    <h4 class="card-title">{{ service.serviceName }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ service.serviceDescription }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
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
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ServicesView',
    components: {
        Card
    },
    computed:{
        services(){
            return this.$store.state.services
        }
    },
    mounted() {
        this.$store.dispatch('fetchServices')
    }
}
</script>
<style scoped>
</style>