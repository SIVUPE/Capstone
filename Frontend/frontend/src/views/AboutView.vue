<template>
 <header class="masthead">
  <p class="masthead-intro">Hi!</p>
  <h1 class="masthead-heading">I'm Elegent Book</h1>
</header>

<section class="aboutme-section my-5">
  <h1>About Elegent Book</h1>
  <p>Welcome to Elegant Book, your premier solution for refined hotel reservations. Designed with a touch of sophistication, Elegant Book is the ultimate platform for discerning travelers and distinguished hoteliers alike.</p>

  <p>At Elegant Book, we understand that every journey begins with a reservation. That's why we've crafted an elegant and seamless booking experience, ensuring that your stay is as exceptional as it is effortless.
  </p>
  <h1>Why is  elegent book good?</h1>
  <p>Elegant Book stands out as a top choice for hotel reservations due to its combination of sophistication, ease of use, comprehensive selection, personalized service, and reliability. Whether you're a traveler in search of the perfect hotel or a hotelier looking to elevate your guest experience, Elegant Book is the ideal partner for a seamless and unforgettable stay. </p>
</section>

<section class="fewthings-section my-5">
  <h1>A Few Other Things</h1>
  <h2>Why is elegent book different?</h2>
  <p>Elegant Book stands out for its sophisticated branding, curated selection, personalized experience, exceptional service, and commitment to innovation. By offering a refined and luxurious booking experience, Elegant Book sets itself apart as the premier choice for travelers seeking unforgettable stays at top-tier hotels.</p>
  <!-- <h2>My Dream Job</h2>
  <p>I want to run my own UX consulting business!</p>
  <h2>Where I'm From</h2>
  <p>I’m originally from the Deep South. I’ve lived in Louisiana, Georgia, and North Carolina, but fell in love with Massachusetts as an undergraduate and came back up to Boston for my current job after finishing my Masters in Information Science at the University of North Carolina at Chapel Hill. I miss good barbecue, friend green tomatoes, and early springs, but love the character and attitude of my current home.</p> -->
</section>


</template>
<script>
    export default {
        name: 'NavbarComp', 
        data() {
            return {
                
            }
        }
    }
</script>
<style scoped>
body {
  /* Typography Declarations */
  
  color: #eee5df;
  font-size: 1em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eee5df;
}
/*---------->masthead<----------*/

.masthead {
  padding: 6em 0;
  background-image: url('https://download.unsplash.com/reserve/AXx3QORhRDKAMrbb8pX4_photo%202.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  border-top: solid 1.5em #29516a;
  font-family: oswald, helvetica, sans-serif;
  text-align: center;
  color: cfc7c3;
}

.masthead-intro {
  margin-bottom: 0.1em;
  font-family: "open sans", "helvetica", sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-shadow: 1px 1px .5px #000;
}

.masthead-heading {
  margin-top: -0.2em;
  font-family: "oswald", "helvetica", sans-serif;
  font-size: 6em;
  letter-spacing: .03em;
  text-shadow: 1px 1px .5px #000;
}
/*-------Body Section--------*/

.aboutme-section,
.fewthings-section {
  max-width: 38em;
  margin-left: auto;
  margin-right: auto;
  /* margin top: 2em; */
  font-family: Oswald, helvetica, sans-serif;
  color: #042f42;
}

.fewthings-section > h2 {
  /*typography declarations*/
  
  font-size: 14pt;
}

.aboutme-section > p,
.fewthings-section > p {
  /*typography declarations*/
  
  font-family: open sans, helvetica, sans-serif;
  font-size: 12pt;
  font-weight: light;
}

/*-----------------------links-----------------------*/

/* unvisited link */

/*---------------footer-----------*/


</style>