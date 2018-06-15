var createSerialGenerator = require("./serialGenerator");
var serialGeneratorA = createSerialGenerator();
var serialGeneratorB = createSerialGenerator();
console.log(serialGeneratorA===serialGeneratorB);