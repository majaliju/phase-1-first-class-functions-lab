// Code your solution in this file!

// the array with drivers (from IndexTest.js)
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(){
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(initial){
    return function(fare){
        return initial * fare;
    }
}

// v1
const fareDoubler = function(){
    return (2 * createFareMultiplier(fare));
}

/* v2 
const fareDoubler = function(){
    const doubledFare = 2 * createFareMultiplier(fare);
    return doubledFare;
} */
