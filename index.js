/**
 * Debugging Guide
 * 1. Make the code more readable ✓
 * 2. Pick up calculation errors ✓
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSecondsPerHour = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const correctedNewVelocity = calcNewVelocity(initialVelocity, acceleration, timeSecondsPerHour); //calculates new velocity based on acceleration
const correctedNewDistance = initialDistance + (initialVelocity * (timeSecondsPerHour / 3600)) + (0.5 * acceleration * Math.pow(timeSecondsPerHour / 3600, 2) / 1000); //calcultes new distance
const correctedRemainingFuel = remainingFuel - (fuelBurnRate * timeSecondsPerHour); //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity(initialVelocity, acceleration, timeSecondsPerHour) { 
  //Convert acceleration to km/h^2 //
  const accelerationKmHour = acceleration * 3.6 * timeSecondsPerHour;
  return initialVelocity + accelerationKmHour;
};

console.log(`Corrected New Velocity: ${correctedNewVelocity} km/h`);
console.log(`Corrected New Distance: ${correctedNewDistance} km`);
console.log(`Corrected Remaining Fuel: ${correctedRemainingFuel} kg`);





