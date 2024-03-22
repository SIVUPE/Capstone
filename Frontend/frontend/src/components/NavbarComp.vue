<template>
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/services">Services</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/booking">Booking</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/adminUser">Admin</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/contact">Contact</router-link>
                  </li>
                  
                  <div class="dropdown">
                      <button class="btn dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-person-circle"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/UserProfile">UserProfile</router-link>
                      </li> 
                      <li class="nav-item">
                        <router-link to="/login">Login</router-link>
                      </li> 
                      <li class="nav-item">
                        <router-link to="/signUp">Register</router-link>
                      </li> 
                    </ul>
                </div>
              </ul>
          </div>
      </div>
            <router-link class="links" v-if="userRole === 'admin'" to="/admin">Admin</router-link>
            <router-link class="links" v-if="userRole === 'admin'" to="/users">Users</router-link>
            <router-link class="links" v-if="userRole === 'user'" to="/userProfile">User</router-link>
  </nav>
</template>
 



<script>

</script>
<style>
.navbar{
  background-color: #29516a;
}

.collapse{
  display: flex;
  justify-content: center;
  align-items: end;
}

.nav-item{
  padding: 10px;
}

</style>
