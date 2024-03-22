<template>
  <section>
    <div class="users-table">
      <div class="container">
        <div class="login">
          <h1>Register</h1>

          <form  class="needs-validation" novalidate>
            <div class="input-box mb-3">
              <input v-model="payload.firstName" type="text" class="form-control" placeholder="First Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="payload.lastName" type="text" class="form-control" placeholder="Last Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="payload.gender" id="gender" class="form-select" required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <i class="fa fa-venus-mars"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="payload.userRole" id="role" class="form-select" required>
                <option value="" disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <i class="fa fa-cogs"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="payload.emailAdd" type="email" class="form-control" placeholder="Email" required>
              <i class="fa fa-envelope"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="payload.userPwd" type="password" class="form-control" placeholder="Password" required>
              <i class="fa fa-lock"></i>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="saveAccount">
              <label class="form-check-label">Save account for future logins</label>
            </div>
            <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
            <button type="button" @click.prevent="registration" class="btn btn-primary d-block mx-auto" :disabled="submitting || !formIsValid">
              {{ submitting ? 'Creating Account...' : 'Create an account' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payload: {
          firstName: '',
          lastName: '',
          gender: '',
          userRole: '',
          emailAdd: '',
          userPwd: ''
        },
        saveAccount: false,
        submitting: false,
      };
    },
    //  userProfile: ''
    computed: {
      formIsValid() {
        return (
          this.payload.firstName.trim() !== '' &&
          this.payload.lastName.trim() !== '' &&
          this.payload.gender !== '' &&
          this.payload.userRole !== '' &&
          this.payload.emailAdd.trim() !== '' &&
          this.payload.userPwd.trim() !== ''
        );
      }
    },
    methods: {
       registration() {
        try {
        if (this.formIsValid) {

          console.log(this.payload);

         this.$store.dispatch('register', this.payload);

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

<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
input{
  border: 0;
  border-bottom: 2px solid black;
}
</style>
  