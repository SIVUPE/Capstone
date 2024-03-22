<template>
  <div class="container">
    <div class="mt-4">
      <nav class="navbar nav-pills nav-underline bg-black w-100 w-md-25 justify-content-center mx-auto" role="tablist">
        <ul class="d-block d-md-flex  mt-2  ">
          <li class="nav-item mx-2">
            <a class="nav-link link-light" aria-current="page" href="#">Services</a>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/user" class="nav-link link-light">Users</router-link>
          </li>
        </ul>

      </nav>
    </div>

 
    <div class=" ServiceBtn d-block d-md-flex row text-end my-5">
      <div class="col">
        <input v-model="searchInput" type="text" placeholder="Search Product by name" @input="Search"
          class="form-control">
      </div>
      <div class="col ">
        <button class=" btn btn-dark"> Filter</button>
      </div>
      <div class="col-2  mx-3">
        <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#AddProd"> Add a Service</button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="AddProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add new Service</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Service Name: </h5>
              <input v-model="payload.serviceName" type="text" placeholder="Name" class="form-control" required>
              <h5 class="text-start mt-2">Service URL: </h5>
              <input v-model="payload.servicesUrl" type="text mt-2" placeholder="Image URL" class="form-control" required>
              <h5 class="text-start mt-2">Service Amount: </h5>
              <input v-model="payload.price" type="number" placeholder="Amount" class="form-control" required>
              <h5 class="text-start mt-2">Service Description: </h5>
              <input v-model="payload.serviceDescription" type="text" placeholder="Description" class="form-control"
                required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="addService()" type="button" class="btn btn-dark">Add Service</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal edit-->
      <div class="modal fade" :id="'edit' + service.serviceID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"
        v-for="service in services" :key="service.serviceID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Service</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Service Name: </h5> 
              <input v-model="payload.serviceName" type="text" :placeholder="service.serviceName" class="form-control">
              <h5 class="text-start mt-2">Service URL: </h5>
              <input v-model="payload.serviceUrl" type="text mt-2" :placeholder="service.prodUrl" class="form-control">
              <h5 class="text-start mt-2">Service Amount: </h5>
              <input v-model="payload.price" type="text" :placeholder="services.price" class="form-control">
              <h5 class="text-start mt-2">Service Description: </h5>
              <input v-model="payload.serviceDescription" type="text" :placeholder="service.serviceDescription"
                class="form-control">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="editService(service.serviceID)" type="button" class="btn btn-dark">Update Service</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal delete-->
      <div class="modal fade" :id="'delete' + service.serviceID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
        v-for="service in services" :key="service.serviceID">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="delete">Delete Service</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5 class="text-start">Are you sure?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button @click="deleteService(service.serviceID)" type="button" class="btn btn-dark">Delete Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <table class="AdiCont table mt-5 w-75 text-center mx-auto my-5" v-if="services">
    <thead>
      <tr>
        <th> Service ID</th>
        <th>Service Name</th>
        <th>price</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="service in filterService" :key="service.serviceID">
        <th scope="row"> {{ service.serviceID }}</th>
        <td>{{ service.serviceName }} </td>
        <td> R {{ service.price }} </td>
        <td><button class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#edit' + service.serviceID"> Edit</button>
        </td>
        <td><button class=" btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#delete' + service.serviceID">
            Delete</button></td>
      </tr>
    </tbody>
  </table>
  
</template>

<script>

export default {
  name: "AdminView",
  data() {
    return {
      searchInput: '',
      payload:
      {
        serviceName: null,
        price: null,
        serviceDescription: null,
        serviceUrl: null,
      }

    }
  },
  

  computed: {
    services() {
      return this.$store.state.services
    },
    filterService() {
      return this.$store.state.services.filter(service =>
        service.serviceName?.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    }
  },
  mounted() {
    this.$store.dispatch('fetchServices');


  },
  methods: {
    Search() {
      'Search input:', this.searchInput
    },
    deleteService(serviceID) {
      this.$store.dispatch('deleteService', serviceID)
    },

    sortItems() {
      this.sortedItems = !this.sortedItems;
    },
    addService() {
      this.$store.dispatch('addNewService', this.payload)
    },
    editService(serviceID) {
      const updateData = Object.assign({}, {serviceID}, this.payload)
      this.$store.dispatch('updateService', updateData)
    }
  }
}
</script>

<style scoped>
/* .container{
  height: 100vh;
} */

</style>