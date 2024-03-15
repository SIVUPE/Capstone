<template>
    <div>
      <h1>Admin View</h1>
      <button class="btn">
        <RouterLink to="/admin">Services</RouterLink>
      </button>
      <button class="btn">
        <RouterLink to="/user">Users</RouterLink>
      </button>
      <table class="table" v-if="services && services.length > 0">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.serviceID">
            <td><img :src="service.servicesUrl" alt="Admin" width="100rem" class="prod-img" /></td>
            <td>{{ service.serviceName }}</td>
            <td>{{ service.price }}</td>
            <td></td>
            <td>
              <button class="btn btn-warning" @click="postService(service)">
                <i class="bi bi-bag-plus-fill">#$</i>
              </button>
              <button class="btn btn-warning" @click="deleteService(service.serviceID)">
                <i class="bi bi-trash3-fill"></i>delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      services() {
        return this.$store.state.services;
      },
    },
    methods: {
      deleteService(serviceID) {
        const confirmDelete = window.confirm('Are you sure you want to delete this service?');
        if (confirmDelete) {
          this.$store.dispatch('deleteService', { serviceID })
            .then(() => {
              window.alert('Service has been deleted.');
            })
            .catch((error) => {
              console.error('Error deleting service', error);
              window.alert('Error deleting service. Please try again.');
            });
        }
      },
      postService() {
        // Assuming serviceName, quantity, amount, and prodUrl are bound to data properties
        const newService = {
          serviceName: this.serviceName,
          quantity: this.quantity,
          amount: this.amount,
          prodUrl: this.prodUrl
        };
  
        this.$store.dispatch('postService', newService)
          .then(() => {
            this.clearFields(); 
            window.alert('Service has been added.');
          })
          .catch((error) => {
            console.error('Error adding service', error);
            window.alert('Error adding service. Please try again.'); 
          });
      },
      clearFields() {
        // Clear the input fields after adding a new service
        this.serviceName = '';
        this.quantity = '';
        this.amount = '';
        this.prodUrl = '';
      }
    },
  };
  </script>
  
  <style>
  /* MEDIA QUERIES */
  @media only screen and (max-width: 600px) {
    .btn {
      background-color:#152733;
      border: #152733;
    }
  }
  </style>
  