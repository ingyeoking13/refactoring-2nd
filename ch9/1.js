let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
