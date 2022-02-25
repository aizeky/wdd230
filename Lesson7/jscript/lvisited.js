var todayRaw = new Date();
var todayYY = todayRaw.getFullYear();
var todayMM = todayRaw.getMonth();
var todayDD = todayRaw.getDate();
var today = new Date(todayYY, todayMM, todayDD);
var lastVisit = document.lastModified.getDate;
// var incident = new Date(2017, 06, 23); //YYYY, MM, DD //month counts from 00 i.e may = 04 not 05
//var today = today.getTime();        // It seems you do not need this...? //
//var incident = incident.getTime();  //                                   //

var difference = Math.round((today - lastVisit)/(1000*60*60*24));
document.querySelector('#days').innerHTML = difference;
//document.querySelector('#last-incident').innerHTML = incident; 
// Use the above line to show last incident. Need to code the formatting first