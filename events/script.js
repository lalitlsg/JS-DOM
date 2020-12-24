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
  e => {
    console.log(1);
    // console.log(e.currentTarget);
    // console.log(e.target);
  },
  false
);
document.getElementById("second").addEventListener(
  "click",
  () => {
    console.log(2);
  },
  false
);
document.getElementById("third").addEventListener("click", () => {
  console.log(3), false;
});
document.getElementById("forth").addEventListener(
  "click",
  e => {
    console.log(4);
    // e.stopPropagation();
    e.stopImmediatePropagation();
  },
  false
);

const forth_2 = () => {
  console.log("_4");
};

document.getElementById("forth").addEventListener("click", forth_2);

document.getElementById("lsg").addEventListener(
  "click",
  e => {
    e.preventDefault();
  },
  false
);
