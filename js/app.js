/* eslint-disable no-unused-vars */
'use strict';

// getRandom function
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// hours of operations will be a global variable
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var i = 0;

// link each list with the DOM
var salesPike = document.getElementById('salesPike');
var salesSeaTac = document.getElementById('salesSeaTac');
var salesSeattle = document.getElementById('salesSeattle');
var salesCap = document.getElementById('salesCap');
var salesAlki = document.getElementById('salesAlki');

// here we'll begin to refactor, starting with pike. We'll begin by making it do the same thing, then convert to tables.
var allStores = [];

// Here we establish our constructor function. Below it, we set the method for calculating customers per hour and cookies per hour, and add to the daily total of 'this' store. Lastly, we render.
function Store(name, min, max, avg){
  this.storeName = name;
  this.minimumCustomers = min;
  this.maximumCustomers = max;
  this.averageCookiesPerSale = avg;
};

Store.prototype.calculateCustomersAndCookies = function(){
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.cookiesDailyTotal = 0;
  for(var i = 0; i < hoursOfOps.length; i++){
    this.customersPerHour.push(getRandom(this.minimumCustomers, this.maximumCustomers));
    this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.averageCookiesPerSale));
    this.cookiesDailyTotal += this.cookiesPerHour[i];
  };
};

Store.prototype.render = function(id){
  this.calculateCustomersAndCookies();

  var lhEl = document.createElement('lh');
  lhEl.textContent = this.storeName;
  id.appendChild(lhEl);

  for(i = 0; i < hoursOfOps.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
    id.appendChild(liEl);
  };

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
  id.appendChild(liEl);
};

// Here we create our objects using our constructor function.
var pike = new Store('First and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Here we call our render methods.
pike.render(salesPike);
seatac.render(salesSeaTac);
seattle.render(salesSeattle);
capitol.render(salesCap);
alki.render(salesAlki);
