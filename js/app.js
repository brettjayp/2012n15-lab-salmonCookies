/* eslint-disable no-unused-vars */
'use strict';

// setting up some global variables
var hoursOfOps = [];
for (var i = 6; i <= 20; i++){
  if (i < 12){
    var hour = `${i}am`;
    hoursOfOps.push(hour);
  } else if(i === 12){
    var hour = `${i}pm`;
    hoursOfOps.push(hour);
  } else {
    var hour = `${i-12}pm`;
    hoursOfOps.push(hour);
  }
}
console.log(hoursOfOps);

var salesOneEl = document.getElementById('salesOne');

var pike = {
  name: 'First and Pike',
  custMin: 23,
  custMax: 65,
  avgCookiesPerHour: 6.3,

  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(i = 0; i < hoursOfOps.length; i++){
      this.customersPerHour.push(getRandom(this.custMin, this.custMax));
    }
  },

  cookiesPerHour: [],
  cookiesDailyTotal: 0,
  calcCookiesPerHour: function(){
    for(i = 0; i < hoursOfOps.length; i++){
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerHour)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  hourSalesPer: [],
  daySalesPer: [],

};
pike.calcCustomersPerHour();
console.log(pike.customersPerHour);
pike.calcCookiesPerHour();
console.log(pike.cookiesPerHour);
console.log(pike.cookiesDailyTotal)

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this is just here for a bit of self teaching
var el = document.getElementById('spicy');
el.textContent = 'Spicy jalapeno bacon ipsum dolor amet drumstick pork loin beef ribs, tail meatloaf porchetta burgdoggen ground round landjaeger swine bacon chicken venison. Corned beef rump tenderloin ground round salami prosciutto venison. Cow venison pork hamburger rump capicola. Drumstick filet mignon turducken shoulder ham. Capicola drumstick corned beef tail, cupim meatloaf filet mignon turkey ball tip fatback biltong leberkas. Turkey pig alcatra cupim, frankfurter landjaeger boudin porchetta ball tip. Hamburger pork loin jowl, short ribs jerky leberkas salami turkey drumstick corned beef.';
var beef = 'Beef ground round venison, porchetta hamburger meatball cupim jerky ham hock pancetta pastrami turkey kevin spare ribs. Rump jerky burgdoggen hamburger. Turkey pork belly andouille sirloin, meatloaf bresaola filet mignon biltong burgdoggen strip steak. Short ribs tenderloin cupim, pig beef ribs jowl shank ball tip.';
var el = document.getElementById('beef');
el.textContent = beef;
// end self teach section
