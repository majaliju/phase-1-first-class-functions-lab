// Code your solution in this file!

// the array with drivers (from IndexTest.js)

/*
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; */


const returnFirstTwoDrivers = function(drivers){
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers){
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(initial){
    return function(fare){
        return initial * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

/*
function selectDifferentDrivers(drivers, function()){
    if (testingDrivers = returnFirstTwoDrivers){
        returnFirstTwoDrivers();
    }
    else if (testingDrivers = returnLastTwoDrivers){
        returnLastTwoDrivers();
    }
} */

function selectDifferentDrivers(drivers, placeHolderFunction){
    return placeHolderFunction(drivers);
}