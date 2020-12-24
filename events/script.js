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
  "mouseout",
  e => {
    console.log(1);
    // console.log(e.currentTarget);
    // console.log(e.target);
  },
  false
);
document.getElementById("second").addEventListener(
  "mouseout",
  () => {
    console.log(2);
  },
  false
);
document.getElementById("third").addEventListener("mouseout", () => {
  console.log(3), false;
});
document.getElementById("forth").addEventListener(
  "mouseout",
  e => {
    console.log(4);
    // e.stopPropagation();
    // e.stopImmediatePropagation();
  },
  false
);

const forth_2 = () => {
  console.log("_4");
};

// document.getElementById("forth").addEventListener("click", forth_2);

document.getElementById("lsg").addEventListener(
  "click",
  e => {
    e.preventDefault();
  },
  false
);

let inp = document.getElementById("in");
// inp.addEventListener("focus", () => {
//   console.log("focus");
// });
// inp.addEventListener("blur", () => {
//   console.log("blur");
// });
// inp.addEventListener("focusin", () => {
//   console.log("focusin");
// });
// inp.addEventListener("focusout", () => {
//   console.log("focusout");
// });

const onKey = e => {
  console.log(`${e.data} - ${e.keyCode} - ${String.fromCharCode(e.keyCode)}`);
};

inp.addEventListener("keydown", onKey);
inp.addEventListener("textInput", onKey);
inp.addEventListener("keyup", onKey);
