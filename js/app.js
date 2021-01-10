'use strict';

var seattel = {
    cityName: 'seattel',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiePerHour: 6.3,
    allCustPerHour: [],

    calcCustPerHour: function () {
        var custPerHr = [];
        for (var i = 0; i < 14; i++) {
            custPerHr[i] = getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour);
        }
        return custPerHr;
    },

    allCookiesPerHour: [],
    calcCookiesPerHour: function () {
        var cookiesPerHr = [];
        for (var i = 0; i < 14; i++) {
            cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookiePerHour);
        }
        return cookiesPerHr;

    }



};

seattel.allCustPerHour = seattel.calcCustPerHour();
seattel.allCookiesPerHour = seattel.calcCookiesPerHour();
console.log(seattel);

var Tokyo = {
    cityName: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiePerHour: 1.2,
    allCustPerHour: [],

    calcCustPerHour: function () {
        var custPerHr = [];
        for (var i = 0; i < 14; i++) {
            custPerHr[i] = getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour);
        }
        return custPerHr;
    },

    allCookiesPerHour: [],
    calcCookiesPerHour: function () {
        var cookiesPerHr = [];
        for (var i = 0; i < 14; i++) {
            cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookiePerHour);
        }
        return cookiesPerHr;

    }



};
Tokyo.allCustPerHour = Tokyo.calcCustPerHour();
Tokyo.allCookiesPerHour = Tokyo.calcCookiesPerHour();
console.log(Tokyo);

var Dubai = {
    cityName: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiePerHour: 3.7,
    allCustPerHour: [],

    calcCustPerHour: function () {
        var custPerHr = [];
        for (var i = 0; i < 14; i++) {
            custPerHr[i] = getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour);
        }
        return custPerHr;
    },

    allCookiesPerHour: [],
    calcCookiesPerHour: function () {
        var cookiesPerHr = [];
        for (var i = 0; i < 14; i++) {
            cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookiePerHour);
        }
        return cookiesPerHr;

    }



};
Dubai.allCustPerHour = Dubai.calcCustPerHour();
Dubai.allCookiesPerHour = Dubai.calcCookiesPerHour();
console.log(Dubai);

var Paris = {
    cityName: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiePerHour: 2.3,
    allCustPerHour: [],

    calcCustPerHour: function () {
        var custPerHr = [];
        for (var i = 0; i < 14; i++) {
            custPerHr[i] = getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour);
        }
        return custPerHr;
    },

    allCookiesPerHour: [],
    calcCookiesPerHour: function () {
        var cookiesPerHr = [];
        for (var i = 0; i < 14; i++) {
            cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookiePerHour);
        }
        return cookiesPerHr;

    }



};
Paris.allCustPerHour = Paris.calcCustPerHour();
Paris.allCookiesPerHour = Paris.calcCookiesPerHour();
console.log(Paris);

var Lima = {

    cityName: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiePerHour: 4.6,
    allCustPerHour: [],

    calcCustPerHour: function () {
        var custPerHr = [];
        for (var i = 0; i < 14; i++) {
            custPerHr[i] = getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour);
        }
        return custPerHr;
    },

    allCookiesPerHour: [],
    calcCookiesPerHour: function () {
        var cookiesPerHr = [];
        for (var i = 0; i < 14; i++) {
            cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookiePerHour);
        }
        return cookiesPerHr;

    }



};
Lima.allCustPerHour = Lima.calcCustPerHour();
Lima.allCookiesPerHour = Lima.calcCookiesPerHour();
console.log(Lima);

var city = [seattel, Tokyo, Dubai, Paris, Lima];
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];





function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

var headPage =document.getElementById('header');
var headImg= document.createElement('img');
headPage.appendChild(headImg);
headImg.src='https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png'


function writrList(name) {
    var parentBody = document.getElementById('main');
    var Atricle = document.createElement('article');
    parentBody.appendChild(Atricle);

    // add title
    var Name = document.createElement('h2');
    Name.textContent = name.cityName;
    Atricle.appendChild(Name);
    var cum=0;
    // unorderd list
    var List = document.createElement('ul');
    Atricle.appendChild(List);
    for(var k=0;k<time.length;k++){
        cum=cum+name.allCookiesPerHour[k];
    
    
    // branch of list
    var Branch = document.createElement('li');
    Branch.textContent = time[k] + ': ' + name.allCookiesPerHour[k]+' cookies';
    List.appendChild(Branch);
    
    }
    //add total
   
    var Branch = document.createElement('li');
    Branch.textContent ='Total: '+ cum +' cookies';
    List.appendChild(Branch); 
}

for(var i=0;i<city.length;i++ ){
    var Name =city[i]
    
        writrList(Name);
        
    
}







