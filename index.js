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

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers;
}


/* more elaborate way to test if selectingDrivers is [0] or [1] 
function selectDifferentDrivers(drivers, selectingDrivers){
    if (drivers.slice(0,2) === selectingDrivers[0]){
        return selectingDrivers[0];
    }
    else if (drivers.slice(-2)=== selectingDrivers[1]){
        return selectingDrivers[1];
    }
} */