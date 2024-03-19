<template>
    <div class="users-table vh-100 d-flex justify-content-center align-items-center" style="">
      <div class="container">
        <div class="login">
          <h1>Register</h1>

          <form @submit.prevent="register" class="needs-validation" novalidate>
            <div class="input-box mb-3">
              <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="gender" id="gender" class="form-select" required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <i class="fa fa-venus-mars"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="userRole" id="role" class="form-select" required>
                <option value="" disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <i class="fa fa-cogs"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="emailAdd" type="email" class="form-control" placeholder="Email" required>
              <i class="fa fa-envelope"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userPwd" type="password" class="form-control" placeholder="Password" required>
              <i class="fa fa-lock"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userProfile" type="text" class="form-control" placeholder="User Profile">
              <i class="fa fa-user-circle"></i>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="saveAccount">
              <label class="form-check-label">Save account for future logins</label>
            </div>
            <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
            <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting || !formIsValid">
              {{ submitting ? 'Creating Account...' : 'Create an account' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        gender: '',
        userRole: '',
        emailAdd: '',
        userPwd: '',
        userProfile: '',
        saveAccount: false,
        submitting: false,
      };
    },
    computed: {
      formIsValid() {
        return (
          this.firstName.trim() !== '' &&
          this.lastName.trim() !== '' &&
          this.gender !== '' &&
          this.userRole !== '' &&
          this.emailAdd.trim() !== '' &&
          this.userPwd.trim() !== ''
        );
      }
    },
    methods: {
      async register() {
        try {
        if (this.formIsValid) {
          const user = {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            userRole: this.userRole,
            emailAdd: this.emailAdd,
            userPwd: this.userPwd,
            userProfile: this.userProfile,
          };

          console.log(user);

         this.$store.dispatch('register', user);

          // this.resetForm();
        }
      } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
      
      } finally {
        this.submitting = false;
      }
      },
      resetForm() {
        Object.assign(this.$data, this.$options.data.call(this));
      },
    },
  };
  </script>
  