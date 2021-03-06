'use strict';

var storeList = [];

function addCell(cellInfo,destinationRow) {
  var cell = document.createElement('td');
  cell.textContent = cellInfo;
  destinationRow.appendChild(cell);
}

function store(location, minimumCustomers, maximumCustomers, averageCookies) {
  this.loc = location;
  this.minCust = minimumCustomers;
  this.maxCust = maximumCustomers;
  this.avgCook = averageCookies;
  this.salesArray = this.makeSalesArray();
  storeList.push(this);
}

store.prototype.hours = 14;
store.prototype.randCust = function() {
  var x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  // console.log(x);
  return x;
};
store.prototype.sales = function() {
  var x = Math.floor(this.randCust() * this.avgCook);
  // console.log(x);
  return x;
};
store.prototype.makeSalesArray = function() {
  var array = [this.loc];
  var total = 0;
  var i;
  for (i = 0; i < this.hours; i++) {
    array.push(this.sales());
    total += array[i+1];
  }
  array.push(total);
  return array;
};
store.prototype.addToTable = function() {
  var storeArray = this.salesArray;
  var tableEl = document.getElementById('storeTable');
  var row = document.createElement('tbody');
  for (var i = 0; i < storeArray.length; i++) {
    addCell(storeArray[i],row);
  }
  tableEl.appendChild(row);
};

function addHeader () {
  var tableEl = document.getElementById('storeTable');
  var row = document.createElement('thead');
  for (var i = 0; i < 16; i++) {
    var colText = '';
    if (i === 0) {
      colText = 'Location';
    } else if (i < 7) {
      colText = (i + 5) + 'am';
    } else if (i === 7) {
      colText = 12 + 'pm';
    } else if (i < 15) {
      colText = ((i + 6) % 12) + 'pm';
    } else {
      colText = 'Daily Location Total';
    }
    addCell(colText,row);
  }
  tableEl.appendChild(row);
}

function makeRows(objArray) {
  for (var i = 0; i < objArray.length; i++) {
    objArray[i].addToTable();
  }
}

function makeTotalsRow(objArray) {
  var tableEl = document.getElementById('storeTable');
  var row = document.createElement('tfoot');
  addCell('Totals',row);
  for (var i = 0; i < 15; i++) {
    var colTotal = 0;
    for (var j = 0; j < objArray.length; j++) {
      colTotal = colTotal + objArray[j].salesArray[i+1];
    }
    addCell(colTotal,row);
  }
  tableEl.appendChild(row);
}

function makeCompleteTable(objArray) {
  addHeader();
  makeRows(objArray);
  makeTotalsRow(objArray);
}
var seattle = new store('Seattle',23,65,6.3);
var tokyo = new store('Tokyo',3,24,1.2);
var dubai = new store('Dubai',11,38,3.7);
var paris = new store('Paris',20,38,2.3);
var lima = new store('Lima',2,16,4.6);
//var innerTEST = new store('test',10,20,10);

makeCompleteTable(storeList);

var storeFormButtonEl = document.getElementById('Stores');

function handleButton(event) {
  event.preventDefault();
  var name = event.target.store.value;
  var minCust = Number(event.target.minCust.value);
  var maxCust = Number(event.target.maxCust.value);
  var avgCook = Number(event.target.avgCook.value);
  // console.log(name, minCust, maxCust, avgCook);
  var x = new store(name, minCust, maxCust, avgCook);
  // console.log(x);
  var table = document.getElementById('storeTable');
  table.innerHTML = null;
  makeCompleteTable(storeList);
}

storeFormButtonEl.addEventListener('submit', handleButton);
