<template>
    <div>
      <h1>User View</h1>
      <button class="btn btn-dark"><RouterLink to="/admin">Products</RouterLink></button>
      <button class="btn btn-dark"><RouterLink to="/user">Users</RouterLink></button>
      
      <table class="table" v-if="users" >
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Gender</th>
            <th scope="col">User Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td><button class="btn btn-dark"><i class="bi bi-pencil-square"></i></button></td>
            <td><button class="btn btn-dark"><i class="bi bi-person-x"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
    },
  };
  </script>
  
  
  <style scoped>
  
  </style>
  