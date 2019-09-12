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

// create each site and populate it's data
var pike = {
  name: 'First and Pike',
  custMin: 23,
  custMax: 65,
  avgCookiesPerSale: 6.3,

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
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  render: function(){
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();

    var lhEl = document.createElement('lh');
    lhEl.textContent = this.name;
    salesPike.appendChild(lhEl);

    for(i = 0; i < hoursOfOps.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      salesPike.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
    salesPike.appendChild(liEl);
  },
};
var seatac = {
  name: 'SeaTac Airport',
  custMin: 3,
  custMax: 24,
  avgCookiesPerSale: 1.2,

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
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  render: function(){
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();

    var lhEl = document.createElement('lh');
    lhEl.textContent = this.name;
    salesSeaTac.appendChild(lhEl);

    for(i = 0; i < hoursOfOps.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      salesSeaTac.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
    salesSeaTac.appendChild(liEl);
  },
};
var seattle = {
  name: 'Seattle Center',
  custMin: 11,
  custMax: 38,
  avgCookiesPerSale: 3.7,

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
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  render: function(){
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();

    var lhEl = document.createElement('lh');
    lhEl.textContent = this.name;
    salesSeattle.appendChild(lhEl);

    for(i = 0; i < hoursOfOps.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      salesSeattle.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
    salesSeattle.appendChild(liEl);
  },
};
var capitol = {
  name: 'Capitol Hill',
  custMin: 20,
  custMax: 38,
  avgCookiesPerSale: 2.3,

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
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  render: function(){
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();

    var lhEl = document.createElement('lh');
    lhEl.textContent = this.name;
    salesCap.appendChild(lhEl);

    for(i = 0; i < hoursOfOps.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      salesCap.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
    salesCap.appendChild(liEl);
  },
};
var alki = {
  name: 'Alki',
  custMin: 2,
  custMax: 16,
  avgCookiesPerSale: 4.6,

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
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale)); // Using Math.floor to return whole integers instead of long trailing decimal values
      this.cookiesDailyTotal += this.cookiesPerHour[i]; // Doing this here prevents unnecessary code
    }
  },

  render: function(){
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();

    var lhEl = document.createElement('lh');
    lhEl.textContent = this.name;
    salesAlki.appendChild(lhEl);

    for(i = 0; i < hoursOfOps.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      salesAlki.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.cookiesDailyTotal} cookies`;
    salesAlki.appendChild(liEl);
  },
};

// render each site location
pike.render();
seatac.render();
seattle.render();
capitol.render();
alki.render();

