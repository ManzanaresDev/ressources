// multiplesOf3Or5.js
export function multiplesOf3Or5(num) {
  if (typeof num !== "number") {
    throw new Error("parameter type error");
  }

  if (num <= 2) {
    return 0;
  }

  let sum = 0;
  for (let index = 3; index < num; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }

  return sum;
}
