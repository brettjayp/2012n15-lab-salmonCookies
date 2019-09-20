/* eslint-disable no-unused-vars */
'use strict';

// Global Variables
var salmonTable = document.getElementById('salmonTable');
var addLocationForm = document.getElementById('salmonForm');
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalTotal = 0;
var hoursTotals = [];
var allStores = [];

// Functions, other than constructor functions
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function renderHead(){
  var trEl = addElement('tr', false, salmonTable);
  addElement('th', 'Location', trEl);
  for(var i = 0; i < hoursOfOps.length; i++){
    addElement('th', hoursOfOps[i], trEl);
  }
  addElement('th', 'Daily Total', trEl);
}
function renderFoot(){
  var trEl = addElement('tr', false, salmonTable);
  addElement('th', 'Hourly Totals', trEl);
  for(var i = 0; i < hoursOfOps.length; i++){
    addElement('td', hoursTotals[i], trEl);
  }
  addElement('th', totalTotal, trEl);
}
function hourlyTotals(){
  for(var i = 0; i < hoursOfOps.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesPerHour[i];
    }
    totalTotal += hourlyTotal;
    hoursTotals.push(hourlyTotal);
  }
}
function addElement(element, content, parent){
  // This function was taken from the call github. I was trying to come up with ways to add elements via funtion.
  var newElement = document.createElement(element);
  if(content){
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  }
  parent.appendChild(newElement);
  return newElement;
}
function renderAll(){
  totalTotal = 0;
  hoursTotals = [];
  renderHead();
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
  hourlyTotals();
  renderFoot();
}

// FORM
function addLocation (event){
  event.preventDefault();

  document.getElementsByTagName('table')[0].innerHTML = '';

  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Store(name, min, max, avg);
  renderAll();
}
addLocationForm.addEventListener('submit', addLocation);
// END FORM

// Here's our constructor function. Below, method for calculating customers/hr and cookies/hr, and add to daily totals of 'this' store and dailyTotals. Last we render.
function Store(name, min, max, avg){
  this.storeName = name;
  this.minimumCustomers = min;
  this.maximumCustomers = max;
  this.averageCookiesPerSale = avg;

  allStores.push(this);
}
Store.prototype.calculateCustomersAndCookies = function(){
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.cookiesDailyTotal = 0;
  for(var i = 0; i < hoursOfOps.length; i++){
    this.customersPerHour.push(getRandom(this.minimumCustomers, this.maximumCustomers));
    this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.averageCookiesPerSale));
    this.cookiesDailyTotal += this.cookiesPerHour[i];
  }
};
Store.prototype.render = function(){
  this.calculateCustomersAndCookies();
  var trEl = addElement('tr', false, salmonTable);
  addElement('th', this.storeName, trEl);
  for(var i = 0; i < hoursOfOps.length; i++){
    addElement('td', this.cookiesPerHour[i], trEl);
  }
  addElement('th', this.cookiesDailyTotal, trEl);
};

// Here we create our pre-existing objects using our constructor function.
var Pike = new Store('First and Pike', 23, 65, 6.3);
var SeaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var Seattle = new Store('Seattle Center', 11, 38, 3.7);
var Capitol = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

renderAll();
