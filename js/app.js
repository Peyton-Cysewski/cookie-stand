'use strict';


var seattle = {
  location: 'Seattle',
  hours: 14,
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randDailyCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcSales: function() {
    return Math.floor(this.randDailyCust() * this.avgCust);
  },
  makeSalesArray: function () {
    var array = [];
    var total = 0;
    var i;
    for (i = 0; i < this.hours; i++) {
      array.push(this.calcSales());
      total += array[i];
    }
    array.push(total);
    return array;
  },
};

var tokyo = {
  location: 'Tokyo',
  hours: 14,
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  randDailyCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcSales: function() {
    return Math.floor(this.randDailyCust() * this.avgCust);
  },
  makeSalesArray: function () {
    var array = [];
    var total = 0;
    var i;
    for (i = 0; i < this.hours; i++) {
      array.push(this.calcSales());
      total += array[i];
    }
    array.push(total);
    return array;
  },
};

var dubai = {
  location: 'Dubai',
  hours: 14,
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  randDailyCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcSales: function() {
    return Math.floor(this.randDailyCust() * this.avgCust);
  },
  makeSalesArray: function () {
    var array = [];
    var total = 0;
    var i;
    for (i = 0; i < this.hours; i++) {
      array.push(this.calcSales());
      total += array[i];
    }
    array.push(total);
    return array;
  },
};

var paris = {
  location: 'Paris',
  hours: 14,
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  randDailyCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcSales: function() {
    return Math.floor(this.randDailyCust() * this.avgCust);
  },
  makeSalesArray: function () {
    var array = [];
    var total = 0;
    var i;
    for (i = 0; i < this.hours; i++) {
      array.push(this.calcSales());
      total += array[i];
    }
    array.push(total);
    return array;
  },
};

var lima = {
  location: 'Lima',
  hours: 14,
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  randDailyCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcSales: function() {
    return Math.floor(this.randDailyCust() * this.avgCust);
  },
  makeSalesArray: function () {
    var array = [];
    var total = 0;
    var i;
    for (i = 0; i < this.hours; i++) {
      array.push(this.calcSales());
      total += array[i];
    }
    array.push(total);
    return array;
  },
};

function timeText (num) {
  if (num < 6) {
    return (num + 6) + 'am';
  } else if (num === 6) {
    return 12 + 'pm';
  } else if (num < 14) {
    return ((num + 6) % 12) + 'pm';
  } else {
    return 'Total';
  }
}

function addName(object, dest) {
  var storeName = document.createElement('h1');
  storeName.textContent = object.location;
  dest.appendChild(storeName);
}

function addNum(object,index,dest) {
  var storeInfo = document.createElement('li');
  storeInfo.textContent = timeText(index) + ': ' + object.makeSalesArray()[index] + ' cookies';
  dest.appendChild(storeInfo);
}

function populatePage(object) {
  
  var storeList = document.getElementById('storelist');
  var storeGroup = document.createElement('li');
  var storePacket = document.createElement('ul');

  addName(object, storeGroup);

  for (var i = 0; i < object.hours + 1; i++) {
    addNum(object,i,storePacket);
  }

  storeGroup.appendChild(storePacket);

  storeList.appendChild(storeGroup);
}

populatePage(seattle);
populatePage(tokyo);
populatePage(dubai);
populatePage(paris);
populatePage(lima);

// The manual order that helped me understand it
// var storeGroup = document.createElement('li');
// var storeName = document.createElement('h1');
// var storePacket = document.createElement('ul');
// var storeInfo = document.createElement('li');


// storeName.textContent = seattle.location;
// storeInfo.textContent = seattle.makeSalesArray()[0];

// storePacket.appendChild(storeInfo);

// storeGroup.appendChild(storeName);
// storeGroup.appendChild(storePacket);


// var storeList = document.getElementById('storelist');
// storeList.appendChild(storeGroup);
