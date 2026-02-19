// function that multiplies numbers
const multiply = (...numbers) => {
  // If no arguments are passed, return 0 
  if (numbers.length === 0) 
    return 0;

  return numbers.reduce((accumulator, current) => accumulator * current);
};
console.log(multiply(2,4,1));

