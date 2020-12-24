let c = setTimeout(
  a => {
    console.log(a);
  },
  5000,
  "Hi"
);

// document.getElementById("clear").addEventListener(
//   "click",
//   () => {
//     clearTimeout(c);
//   },
//   false
// );

let i = setInterval(
  l => {
    console.log(l);
  },
  5000,
  "Lalit"
);

document.getElementById("clear").addEventListener(
  "click",
  () => {
    clearInterval(i);
  },
  false
);
