/* eslint-disable no-unused-vars */
'use strict';

// Global Variables


// Global Functions
// the following 4 functions are the event functions for when the user click icons from iconBar
function clickFishingSpots (event){
  alert('The fishing spots / store locations page is under construction at this time, sorry.');
}
function clickMerchandise (event){
  alert('The merchandise page is under construction at this time, sorry.');
}
function clickNewOrders (event){
  alert('The new orders page is under construction at this time, sorry.');
}
function clickSocial (event){
  alert('The social page is under construction at this time, sorry.');
}

// Event Listeners
// the following event listeners are for the iconBar buttons that don't have pages yet
document.getElementById('clickFishingSpots').addEventListener('click', clickFishingSpots);
document.getElementById('clickMerchandise').addEventListener('click', clickMerchandise);
document.getElementById('clickNewOrders').addEventListener('click', clickNewOrders);
document.getElementById('clickSocial').addEventListener('click', clickSocial);
// these event listener must go last, they don't exist on all pages, if they don't exist on a page then any listeners below them won't work.
document.getElementById('clickFishingSpotsBig').addEventListener('click', clickFishingSpots);
document.getElementById('clickNewOrdersBig').addEventListener('click', clickNewOrders);
