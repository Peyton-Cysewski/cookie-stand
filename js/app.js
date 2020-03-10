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
}



var storeList = document.getElementById('storelist');




var storeEl = document.createElement('li');
var storeName = document.createElement('h1');
var storeText = document.createElement('p');




storeName.textContent = seattle.location;
storeText.textContent = seattle.makeSalesArray[0];




storeEl.appendChild(storeName);
storeEl.appendChild(storeText);




storeList.appendChild(storeEl);












