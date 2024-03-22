<template>


  
  <div class="theme-switch-wrapper justify-content-center align-items-center" >
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="darkMode" @change="switchTheme" />
      <div class="slider round"></div>
     </label>
    <div class="description">Dark Mode</div>
  </div>
      <span class="where-to">Where to?</span> <span class="required">(Required) </span> <br />
    <div class="location-ask">
      <div class="booking">
        <label class="location-label" for="location">Location:</label>
        <input v-model="location" type="text" class="location" placeholder="City, Location, Hotel" required id="location">
        <button type="button" class="btn date" @click="openDatePopup">Date</button>
        <div class="date-popup" v-show="showDatePopup" id="date-popup">
    <h2>Select Dates</h2>
    <label for="checkin">Check-in:</label>
    <input v-model="checkinDate" type="date" id="checkin" @change="updateCheckoutMinDate" required>

    <label for="checkout">Check-out:</label>
    <input v-model="checkoutDate" type="date" id="checkout" :min="minCheckoutDate" required>

    <button type="button" @click="closeDatePopup">OK</button>
  </div>
        <button type="button" class="btn room" @click="openRoomPopup">Rooms & Guests</button>
        <div class="room-popup" v-show="showRoomPopup" id="room-popup">
          <h2>Rooms and Guests</h2>
          <div class="container-room">
            <form>
              <label for="rooms">Rooms:</label>
              <input v-model.number="rooms" type="number" id="rooms" ><br><br>
              <label for="adults">Adults:</label>
              <input v-model.number="adults" type="number" id="adults" ><br><br>
              <label for="kids">Kids:</label>
              <input v-model.number="kids" type="number" id="kids" ><br><br>
            </form>
            <button type="button" @click="closeRoomPopup">OK</button>
          </div>
        </div>
        <button type="button" class="btn find-hotels" @click="reserveRoom">Reserve Room</button>
     </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    setup() {
    const darkMode = ref(false);
    const switchTheme = () => {
      document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
    };

    return {
      darkMode,
      switchTheme
    };
  },
    
    data() {
      return {
        location: null,
        showDatePopup: false,
        showRoomPopup: false,
        rooms: 1,
        adults: 1,
        kids: 0,
        checkinDate: null, 
        checkoutDate: null
        
        // submitForm
  
      };
    },
    
    methods: {
      minCheckoutDate() {
      if (this.checkinDate) {
        const minDate = new Date(this.checkinDate);
        minDate.setDate(minDate.getDate() + 1); 
        return minDate.toISOString().split('T')[0];
      }
      return new Date().toISOString().split('T')[0];
      
    },
      openDatePopup() {
        this.showDatePopup = true;
      },
      closeDatePopup() {
        this.showDatePopup = false;
      },
      openRoomPopup() {
        this.showRoomPopup = true;
      },
      closeRoomPopup() {
        this.showRoomPopup = false;
      },
      reserveRoom() {
        alert('Room reserved');
      }
    },

    

  };
  </script>
  <style scoped >
:root {
  --primary-color: #010712;
  --secondary-color: #818386;
  --bg-color: #FCFDFD;
  --button-color: #3B3636;
  --h1-color: #3F444C;
}
[data-theme="dark"] {
  --primary-color: #FCFDFD;
  --secondary-color: #818386;
  --bg-color: #010712;
  --button-color: #818386;
  --h1-color: #FCFDFD;
}
* {
  margin: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
.contact-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
}
.left-col {
  width: 45vw;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  width: 10rem;
  padding: 1.5rem;
}
.right-col {
  background: var(--bg-color);
  width: 50vw;
  height: 100vh;
  padding: 5rem 3.5rem;
}
h1, label, button, .description {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
}
h1 {
  color:var(--h1-color);
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  font-weight: 300;
}
p {
  color: var(--secondary-color);
  font-size: 0.9rem;
  letter-spacing: 0.01rem;
  width: 40vw;
  margin: 0.25rem 0;
}
label, .description {
  color: var(--secondary-color);
  text-transform: uppercase;
  font-size: 0.625rem;
}
form {
  width: 31.25rem;
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;
}
input, textarea, label {
  width: 40vw;
  display: block;
}
p, placeholder, input, textarea {
  font-family: 'Helvetica Neue', sans-serif;
}
input::placeholder, textarea::placeholder {
  color: var(--primary-color);
}
input, textarea {
  color: var(--primary-color);
  font-weight: 500;
  background: var(--bg-color);
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  outline: none;
}
textarea {
  resize: none;
}
button {
  text-transform: uppercase;
  font-weight: 300;
  background: var(--button-color);
  color: var(--bg-color);
  width: 10rem;
  height: 2.25rem;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
input:hover, textarea:hover, button:hover {
  opacity: 0.5;
}
button:active {
  opacity: 0.8;
}
.theme-switch-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  width: 160px;
  right: 0;
}
.description {
    margin-left: 1.25rem;
  }
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}
.theme-switch input {
  display:none;
}
.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}
.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 26px;
  height: 26px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}
input:checked + .slider {
  background-color: var(--button-color);
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
#error, #success-msg {
  width: 40vw;
  margin: 0.125rem 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: 'Jost';
  color: var(--secondary-color);
  }
@media only screen and (max-width: 950px) {
  .logo {
    width: 8rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  p {
    font-size: 0.7rem;
  }
  input, textarea, button {
    font-size: 0.65rem;
  }
  .description {
    font-size: 0.3rem;
    margin-left: 0.4rem;
  }
  button {
    width: 7rem;
  }
  .theme-switch-wrapper {
    width: 120px;
  }
  .theme-switch {
  height: 28px;
  width: 50px;
}
.theme-switch input {
  display:none;
}
.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 20px;
  height: 20px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}
  input:checked + .slider:before {
  transform: translateX(16px);
}
.slider.round {
  border-radius: 15px;
}
.slider.round:before {
  border-radius: 50%;
}
}
</style><style>
:root {
  --primary-color: #010712;
  --secondary-color: #818386;
  --bg-color: #FCFDFD;
  --button-color: #3B3636;
  --h1-color: #3F444C;
}
[data-theme="dark"] {
  --primary-color: #FCFDFD;
  --secondary-color: #818386;
  --bg-color: #010712;
  --button-color: #818386;
  --h1-color: #FCFDFD;
}
* {
  margin: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
.contact-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
}
.left-col {
  width: 45vw;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  width: 10rem;
  padding: 1.5rem;
}
.right-col {
  background: var(--bg-color);
  width: 50vw;
  height: 100vh;
  padding: 5rem 3.5rem;
}
h1, label, button, .description {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
}
h1 {
  color:var(--h1-color);
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  font-weight: 300;
}
p {
  color: var(--secondary-color);
  font-size: 0.9rem;
  letter-spacing: 0.01rem;
  width: 40vw;
  margin: 0.25rem 0;
}
label, .description {
  color: var(--secondary-color);
  text-transform: uppercase;
  font-size: 0.625rem;
}
form {
  width: 31.25rem;
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;
}
input, textarea, label {
  width: 40vw;
  display: block;
}
p, placeholder, input, textarea {
  font-family: 'Helvetica Neue', sans-serif;
}
input::placeholder, textarea::placeholder {
  color: var(--primary-color);
}
input, textarea {
  color: var(--primary-color);
  font-weight: 500;
  background: var(--bg-color);
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  outline: none;
}
textarea {
  resize: none;
}
button {
  text-transform: uppercase;
  font-weight: 300;
  background: var(--button-color);
  color: var(--bg-color);
  width: 10rem;
  height: 2.25rem;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
input:hover, textarea:hover, button:hover {
  opacity: 0.5;
}
button:active {
  opacity: 0.8;
}
.theme-switch-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  width: 160px;
  right: 0;
}
.description {
    margin-left: 1.25rem;
  }
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}
.theme-switch input {
  display:none;
}
.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}
.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 26px;
  height: 26px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}
input:checked + .slider {
  background-color: var(--button-color);
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
#error, #success-msg {
  width: 40vw;
  margin: 0.125rem 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: 'Jost';
  color: var(--secondary-color);
  }
@media only screen and (max-width: 950px) {
  .logo {
    width: 8rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  p {
    font-size: 0.7rem;
  }
  input, textarea, button {
    font-size: 0.65rem;
  }
  .description {
    font-size: 0.3rem;
    margin-left: 0.4rem;
  }
  button {
    width: 7rem;
  }
  .theme-switch-wrapper {
    width: 120px;
  }
  .theme-switch {
  height: 28px;
  width: 50px;
}
.theme-switch input {
  display:none;
}
.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 20px;
  height: 20px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}
  input:checked + .slider:before {
  transform: translateX(16px);
}
.slider.round {
  border-radius: 15px;
}
.slider.round:before {
  border-radius: 50%;
}
}
.location-ask{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
}
</style>
  
 
