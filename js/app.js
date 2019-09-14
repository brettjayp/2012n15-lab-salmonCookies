/* eslint-disable no-unused-vars */
'use strict';

// required links with the DOM
var tableHead = document.getElementById('tableHead');
var salesPike = document.getElementById('salesPike');
var salesSeaTac = document.getElementById('salesSeaTac');
var salesSeattle = document.getElementById('salesSeattle');
var salesCap = document.getElementById('salesCap');
var salesAlki = document.getElementById('salesAlki');
var tableFoot = document.getElementById('tableFoot');

// Global Variables
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalTotal = 0;

// Functions, other than constructor functions
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function renderHead(){
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  tableHead.appendChild(thEl);

  for(var i = 0; i < hoursOfOps.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOps[i];
    tableHead.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  tableHead.appendChild(thEl);
}
function renderFoot(){
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  tableFoot.appendChild(thEl);

  hourlyTotals();
  for(var i = 0; i < hoursOfOps.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = hoursTotals[i];
    tableFoot.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = totalTotal;
  tableFoot.appendChild(thEl);
}
var hoursTotals = [];
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

// Here's our constructor function. Below, method for calculating customers/hr and cookies/hr, and add to daily totals of 'this' store and dailyTotals. Last we render.
function Store(name, min, max, avg){
  this.storeName = name;
  this.minimumCustomers = min;
  this.maximumCustomers = max;
  this.averageCookiesPerSale = avg;
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

Store.prototype.render = function(id){
  this.calculateCustomersAndCookies();

  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  id.appendChild(thEl);

  for(var i = 0; i < hoursOfOps.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    id.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = this.cookiesDailyTotal;
  id.appendChild(thEl);
};

// Here we create our objects using our constructor function.
var pike = new Store('First and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var allStores = [pike, seatac, seattle, capitol, alki];

// Here we call our render methods.
renderHead();
pike.render(salesPike);
seatac.render(salesSeaTac);
seattle.render(salesSeattle);
capitol.render(salesCap);
alki.render(salesAlki);
renderFoot();
