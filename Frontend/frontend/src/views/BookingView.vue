<template>
    <div class="location-ask">
      <span class="where-to">Where to?</span> <span class="required">(Required) </span> <br />
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
  export default {
    data() {
      return {
        location: null,
        showDatePopup: false,
        showRoomPopup: false,
        rooms: 1,
        adults: 1,
        kids: 0
      };
    },
    methods: {
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
        // Perform action to reserve room using location, rooms, adults, and kids
        alert('Room reserved');
      }
    }
  };
  </script>
  <style scoped>
  @media only screen and (max-width: 768px) {
    header ul {
        display: block;
        position: fixed;
        left: -100%;
        top: 7rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.5s;
        box-shadow: 0 10px 27px #000;
        z-index: 20;
    }
}

/* Typo */

@import 'https://fonts.googleapis.com/css?family=Montserrat|Varela|Oswald:400,700';

/* Main */

body {
  background-color: #F4F4F4;
}

main {
  width: 375px;
  height: 667px;
  margin: 40px auto 0 auto;
  border: 1px solid #F4F4F4; 
  background-color: #FFFFFF;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, .2);
  position: relative;
}

section {
  width: 315px;
  margin: 0 auto;
}

/* Navigation */

.navigation {
  margin-top: 40px;
  overflow: hidden;
  height: 30px;
}
.back-to-home {
  float: left;
}
.search {
  float: right;
}

/* Restaurant */

.restaurant div:nth-child(1) {
  width: 95px;
  height: 95px;
  margin: 0 auto;
  border: 6px solid #474850;
  border-radius: 50%;
  background: url("http://www.phuketdining.com/images/casuarina_large.jpg") no-repeat;
  background-size: cover;
  box-shadow: 0 5px 9px 0 rgba(71, 72, 80, .5);
}
.restaurant h1 {
  padding: 0;
  margin: 30px 0 0 0;
  text-align: center;
  text-transform: uppercase;
  color: #64666F;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

/* Number of tables to book */

.number-of-tables {
  text-align: center;
  margin-top: 60px;
}
.number-of-tables h2 {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Varela', sans-serif;
  font-size: 16px;
  color: #707076
}
.number-of-tables div {
  display: inline-block;
}
.counter {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 72px;
  margin: 0 60px;
  color: #5E606A;
}
.minus, .plus {
  height: 72px;
  width: 30px;
  vertical-align: top;
  position: relative;
}
.minus svg, .plus svg {
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  
}

/* Date and time */

.choose-date {
  margin-top: 70px;
}
.choose-date h2, .choose-date div {
  text-align: center;
}
.choose-date h2 {
  font-family: 'Varela', sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  color: #707076;
}
.choose-date h2 span {
  font-family: "Verdana", sans-serif;
}
.choose-date div {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  word-spacing: 5px;
  color: #5E606A;
}
.choose-date div span {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}

/* Confirm */

.confirm-book {
  width: 255px;
  height: 46px;
  line-height: 46px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  background-color: #474850;
  color: #FFFFFF;
  box-shadow: 0 12px 15px -9px rgba(71, 72, 80, .5);
}

/* Footer */


</style>
  
  
 