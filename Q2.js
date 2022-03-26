const numbers = [1,4,8,9];


var maximum = numbers[0];
var minimum = numbers[0];

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }
  if (numbers[i] < minimum) {
    minimum = numbers[i];
}

}


            
console.log(minimum);
console.log(maximum);
