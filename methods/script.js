// let c = setTimeout(
//   a => {
//     console.log(a);
//   },
//   5000,
//   "Hi"
// );

// document.getElementById("clear").addEventListener(
//   "click",
//   () => {
//     clearTimeout(c);
//   },
//   false
// );

// let i = setInterval(
//   l => {
//     console.log(l);
//   },
//   5000,
//   "Lalit"
// );

// document.getElementById("clear").addEventListener(
//   "click",
//   () => {
//     clearInterval(i);
//   },
//   false
// );

// window.onload = () => {
//   window.alert("Lalit");
// };

// window.addEventListener("load", () => {
//   window.alert("Lalit G");
// });

// let f = document.forms[1];
// let f = document.forms["first"];
// let f = document.second;
// let f = document.getElementById("first");

// let e = document.first.elements[1].name;

// let e = document.first.elements["pass"];
// let e = document.first.user;
// let e = document.first.user.value;

const validate = () => {
  let reg = /^([^0-9\W]*)$/;
  if (reg.test(document.first.user.value)) {
    document.first.user.style.backgroundColor = "green";
    document.getElementById("info").textContent = "Valid";
  } else {
    document.first.user.style.backgroundColor = "red";
    document.getElementById("info").textContent = "Invalid";
  }
};

document.first.user.addEventListener("keyup", validate, false);

// console.log(i);
