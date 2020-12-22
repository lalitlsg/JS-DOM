let name = document.getElementById("name");
// console.log(name);

let coll = document.getElementsByTagName("div");
// console.log(coll);

//more specific
let r = document.getElementById("main").getElementsByTagName("span");
// console.log(r.length);

// for (let i of r) {
//   console.log(i);
// }

let c = document.getElementsByClassName("no");
// console.log(c.length);
// for (let i of c) {
//   console.log(i);
// }

//more specific
let bro = document.getElementById("main").getElementsByClassName("bro");
// console.log(bro);

let qs = document.querySelector("#main, .no, section");
// console.log(qs);

let qsa = document.querySelectorAll("div, #main, .no.le, b[class='bro']");
// console.log(qsa);

//more specific
qsa = document.querySelectorAll("#main > span");
// console.log(qsa.length);
// for (let i of qsa) {
//   console.log(i);
// }
