//Challenge 1:addition of two numbers
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(4, 5));

//2 convert minutes into seconds
function convert(num: number): number {
  return num * 60;
}
console.log(convert(5));

//3 permeter of a rectangle

function findPerimeter(length: number, width: number): number {
  return 2 * (length + width);
}
console.log(findPerimeter(4, 6));

// 4 check negative number

function isNegative(digit: number): boolean {
  return digit < 0;
}
console.log(isNegative(-8));

//5. can i drive
function canDrive(name: string, age: number): string {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive yet`;
  }
}
console.log(canDrive("john", 18));

// 6 largest number
function findLargest(a: number, b: number, c: number): string {
  if (a > b && a > c) {
    return `${a} is largest`;
  } else if (b > a && b > c) {
    return `${b} is largest`;
  } else {
    return `${c} is largest`;
  }
}
console.log(findLargest(5, 6, 9));

//7 The BMI calculator
function calculateBMI(weight: number, height: number): string {
  let bmi: number = weight / (height * height);
  let results: string;
  if (bmi >= 30) {
    results = "Obese";
  } else if (bmi >= 25) results = "Overweight";
  else if (bmi >= 18.5) {
    results = "Normal weight";
  } else {
    results = "Underweight";
  }
  return `Yours BMI is ${bmi.toFixed(1)} and you are ${results}`;
}

console.log(calculateBMI(80, 1.78));

// 8 Greeting based on time
function greetUser(name: string, hour: number): string {
  if (hour >= 5 && hour <= 11) {
    return `Good morning ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good Afternoon,${name}`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening,${name}`;
  } else if (hour <= 4 || (hour >= 22 && hour <= 23)) {
    return `Good night,${name}`;
  }
  return `invalid time`;
}
console.log(greetUser("Alice", 22));

//9.The fizzbuzz checker
function FizzBuzz(number: number): string {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  }
  if (number % 5 == 0) {
    return "Buzz";
  }
  if (number % 3 == 0) {
    return "fizz";
  }
  return "";
}
console.log(FizzBuzz(3));

//10 perimeter 2 ,circle and squire
function perimeter2(letter: string, side: number): number {
  switch (letter) {
    case "s":
      return 4 * side;
    case "c":
      return 6.18 * side;
    default:
      return 0;
  }
}
console.log("Perimeter is:" + perimeter2("c", 5));
//11 function to add all even number

function addAllEven(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log("Even numbers:" + addAllEven(8));

//12 multiply by itself
function powerUp(numb: number, times: number): number {
  return numb ** times;
}
console.log("power itself" + powerUp(3, 4));

//13.factorial calculator
function factorial(m: number): number {
  if (m < 1) {
    return 1;
  }
  return m * factorial(m - 1);
}
console.log(`The factorial is: ${factorial(6)}`);

//14. sum of multiples
function sumMultiples(n: number, divisor: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor == 0) sum += i;
  }
  return sum;
}
console.log(`multiple is:${sumMultiples(90, 3)}`);

//15 sum of digits
function sumDigits(numbers: number): number {
  if (numbers < 0) {
    console.log("enter positive integer");
  }
  if (numbers < 10) {
    return numbers;
  }
  return (numbers % 10) + sumDigits(Math.floor(numbers / 10));
}
console.log(sumDigits(123));
