
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));

function functionname() {
    console.log("function executed");
}
let d = new Date();
d.getFullYear();
d.getMonth();
d.getDate();
d.getHours();
d.getMinutes();
console.log(d.getFullYear());


let x = 1;

function outer() {
  let y = 2;

  function inner() {
    console.log(x, y);
  }

  inner();
}

outer();
const sum = (p, q) => {
    return p + q;
}   
console.log(sum(7, 8));