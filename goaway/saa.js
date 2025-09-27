const myArray = [1, 2, 3];
myArray.push(myArray.length);
myArray.push("Wait, am I becoming self-aware?");
myArray.push(myArray);
console.log(myArray); // [1, 2, 3, 3, "Wait, am I becoming self-aware?", [Circular]]