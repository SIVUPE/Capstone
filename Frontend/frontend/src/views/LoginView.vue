<template>
    <body>

        <div class="container">
  <div class="row">
    <!-- Left Blank Side -->
    <div class="col-lg-6"></div>

    <!-- Right Side Form -->
    <div class="col-lg-6 d-flex align-items-center justify-content-center right-side">
      <div class="form-2-wrapper">
        <div class="logo text-center">
          <h2>Logo</h2>
        </div>
        <h2 class="text-center mb-4">Sign Into Your Account</h2>
        <form action="#">
          <div class="mb-3 form-box">
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter Your Email" required>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" required>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
              <a href="forget-3.html" class="text-decoration-none float-end">Forget Password</a>
            </div>

          </div>
          <button type="submit" class="btn btn-outline-secondary login-btn w-100 mb-3">Login</button>
          <div class="social-login mb-3 type--A">
            <h5 class="text-center mb-3">Social Login</h5>
            <button class="btn btn-outline-secondary  mb-3"><i class="fa-brands fa-google text-danger"></i> Sign With Google</button>
            <button class="btn btn-outline-secondary mb-3"><i class="fa-brands fa-facebook-f text-primary"></i> Sign With Facebook</button>
          </div>
        </form>

        <!-- Register Link -->
        <p class="text-center register-test mt-3">Don't have an account? <a href="/signUp" class="text-decoration-none">Register here</a></p>
      </div>
    </div>
  </div>
</div>

</body>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    login() {
      // Validate email and password if needed
      if (this.email && this.password) {
        // Perform login logic here
        // For demonstration, just alert that user is logged in
        alert('You are logged in!');
      } else {
        // Handle case when email or password is missing
        alert('Please enter both email and password');
      }
    },
    signInWithGoogle() {
      // Implement Google sign-in logic
      console.log('Signing in with Google');
      // Handle success and error cases
    },
    signInWithFacebook() {
      // Implement Facebook sign-in logic
      console.log('Signing in with Facebook');
      // Handle success and error cases
    },
    sub(event) {
      if (this.loginInput === '' || this.senha === '') {
        this.alert = true;
        this.log = 'User and Password are required.';
        event.preventDefault();
      } else {
        this.log = 'Go';
      }
    }
  }
};
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px,transparent 2px, transparent 4px),linear-gradient(0deg, rgb(70, 143, 234),rgb(187, 235, 205));
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
}

.form-2-wrapper {
    background: #9d00ff29;
    padding: 50px;  
    border-radius: 8px;
}
input.form-control{
    padding: 11px;
    border: none;
    border: 2px solid #405c7cb8;
    border-radius: 30px;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
   
   
}
input.form-control:focus{
    box-shadow: none !important;
    outline: 0px !important;
    background-color: transparent;
}
button.login-btn{
    background: #b400ff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 30px;
}
.register-test a{
    color: #000;
}
.social-login button{
    border-radius: 30px;
}

</style>
