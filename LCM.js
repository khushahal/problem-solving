
function LCM(a, b) {
  let result = [];

  let i = 2;
  while (a > 1 || b > 1) {
    let isNullReminder = a % i == 0 || b % i == 0;

    if (isNullReminder) {
      a % i == 0 && (a = a / i);
      b % i == 0 && (b = b / i);

      result.push(i);
    } else {
      ++i;
    }
  }

  console.log("result ", result);

  return result;
}

//LCM(3, 4);
LCM(15, 25);
