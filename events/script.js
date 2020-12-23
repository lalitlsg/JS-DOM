// const alertMsg = () => {
//   alert("alert from JS");
// };

// const view = document.getElementById("view");
// view.onclick = () => {
//   console.log("clicked");
// };

// const show = () => {
//   console.log("clicked");
// };

// view.addEventListener("click", show);

// view.addEventListener("click", () => {
//   console.log("clicked2");
// });

// view.removeEventListener("click", show);

document.getElementById("first").addEventListener(
  "click",
  () => {
    console.log(1);
  },
  true
);
document.getElementById("second").addEventListener(
  "click",
  () => {
    console.log(2);
  },
  true
);
document.getElementById("third").addEventListener("click", () => {
  console.log(3), true;
});
document.getElementById("forth").addEventListener(
  "click",
  () => {
    console.log(4);
  },
  true
);
