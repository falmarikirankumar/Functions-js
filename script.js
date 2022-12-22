// 1
function Demo() {
  console.log("Demo Function");
}
Demo();

// 2
function sum(a, b) {
  total = a + b;
  console.log(`Sum of ${a}, ${b} is ${total}`);
}
sum(3, 4);

// 3
const mul = (a, b) => {
  total = a * b;
  console.log(`Multiplication of ${a}, ${b} is ${total}`);
};
mul(3, 4);

// 4
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

// 5
var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}

// 6
var x = 21;
a();
b();

function a() {
  x = 20;
  console.log(x);
}
function b() {
  x = 40;
  console.log(x);
}

// 7
const fact = (n) => {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
};

console.log(fact(5));
