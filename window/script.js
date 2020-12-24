const btn = document.getElementById("new");
let n = null;
const newWindow = () => {
  n = window.open("", "_black", "height=100, width=100");
  n.document.write("New Window");
};

const print = () => {
  window.print();
};

btn.addEventListener("click", newWindow, false);

document.getElementById("close").addEventListener(
  "click",
  () => {
    n.close();
  },
  false
);

document.getElementById("focus").addEventListener(
  "click",
  () => {
    n.focus();
  },
  false
);
document.getElementById("blur").addEventListener(
  "click",
  () => {
    n.blur();
  },
  false
);

document.getElementById("mb").addEventListener(
  "click",
  () => {
    n.resizeTo(500, 500);
    n.focus();
  },
  false
);

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("scroll").addEventListener("click", scrollUp, false);
