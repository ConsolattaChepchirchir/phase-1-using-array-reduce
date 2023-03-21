const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 31;
let totalBatteriesBatches= batteryBatches.reduce((total,element) => total += element, totalBatteries);
console.log(totalBatteriesBatches)