// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// returnFirstTwoDrivers()
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
//returnLastTwoDrivers()
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4);
};

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(10));

// fareDoubler()

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(22));

// fareTripler()

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(11));

// selectDifferentDrivers()

const selectDifferentDrivers = function (drivers, returnDrivers) {
    return returnDrivers(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));