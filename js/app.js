'use strict';


var city = [seattel, Tokyo, Dubai, Paris, Lima];
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

//creat constructor


function Location(cityName, min, max, avg) {
    this.cityName = cityName;
    this.minCustPerHour = min;
    this.maxCustPerHour = max;
    this.avgCookiePerHour = avg;
    this.allCustPerHour = [];
    this.allCookiesPerHour = [];

};

// define a method in prototype

Location.prototype.calcCustPerHour = function () {
    for (var i = 0; i < time.length; i++) {
        this.allCustPerHour.push(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour));
    };

};

Location.prototype.calcCookiesPerHour = function () {
    for (var i = 0; i < time.length; i++) {
        this.allCookiesPerHour.push(Math.ceil(this.allCustPerHour[i] * this.avgCookiePerHour));


    };
};

// adding table
var parentDiv = document.getElementById('location');
var parentTable = document.createElement('table');
parentDiv.appendChild(parentTable);

// add head to table
function headerRoW() {
    var headOfTable = document.createElement('tr');
    parentTable.appendChild(headOfTable);
    var exactHour = document.createElement('th');
    exactHour.textContent = '   ';
    headOfTable.appendChild(exactHour)
    for (var j = 0; j < time.length; j++) {
        var exactHour = document.createElement('th');
        exactHour.textContent = time[j];
        headOfTable.appendChild(exactHour);
    }
    var exactHour = document.createElement('th');
    exactHour.textContent = '  Daily Location Total ';
    headOfTable.appendChild(exactHour);
};

// add render Function
var totalArr = [];
for (var j = 0; j < time.length; j++) {
    totalArr[j] = 0;
};

Location.prototype.render = function () {
    var cityRow = document.createElement('tr');
    parentTable.appendChild(cityRow)
    var cityInfo = document.createElement('td');
    cityInfo.textContent = this.cityName;
    cityRow.appendChild(cityInfo);
    var DailyLocationTotal = 0;

    for (var j = 0; j < time.length; j++) {
        var cityInfo = document.createElement('td');
        cityInfo.textContent = this.allCookiesPerHour[j];
        cityRow.appendChild(cityInfo);
        DailyLocationTotal = DailyLocationTotal + this.allCookiesPerHour[j];

        totalArr[j] = totalArr[j] + this.allCookiesPerHour[j]
    }
    var cityInfo = document.createElement('td');
    cityInfo.textContent = DailyLocationTotal;
    cityRow.appendChild(cityInfo);




};

// creat object foe each city by constructor
headerRoW();

var seattel = new Location('seattel', 23, 65, 6.3);
seattel.calcCustPerHour();
seattel.calcCookiesPerHour();
seattel.render();
console.log(seattel);

var Tokyo = new Location('Tokyo', 3, 24, 1.2);
Tokyo.calcCustPerHour();
Tokyo.calcCookiesPerHour();
Tokyo.render();
console.log(Tokyo);

var Dubai = new Location('Dubai', 11, 38, 3.7);
Dubai.calcCustPerHour();
Dubai.calcCookiesPerHour();
Dubai.render();
console.log(Dubai);

var Paris = new Location('Paris', 20, 38, 2.3);
Paris.calcCustPerHour();
Paris.calcCookiesPerHour();
Paris.render();
console.log(Paris);

var Lima = new Location('Lima', 2, 16, 4.6);
Lima.calcCustPerHour();
Lima.calcCookiesPerHour();
Lima.render();
console.log(Lima);
console.log(totalArr, 'totalArr');

footerRoW();
// add footer to table
function footerRoW() {
    
    

    var footerOfTable = document.createElement('tr');
    
    parentTable.appendChild(footerOfTable);
    var CookeisPerHr = document.createElement('th');
    CookeisPerHr.setAttribute("id", "total");
    CookeisPerHr.textContent = 'Total';
    footerOfTable.appendChild(CookeisPerHr)
    for (var j = 0; j < time.length; j++) {

        var CookeisPerHr = document.createElement('th');
        CookeisPerHr.textContent = totalArr[j];
        CookeisPerHr.setAttribute("id", "total");
        footerOfTable.appendChild(CookeisPerHr);
    }
    var totalDaily = 0;
    for (var j = 0; j < time.length; j++) {
        totalDaily = totalDaily + totalArr[j];
    }
    var CookeisPerHr = document.createElement('th');
    CookeisPerHr.textContent = totalDaily;
    CookeisPerHr.setAttribute("id", "total");
    footerOfTable.appendChild(CookeisPerHr);
};

















