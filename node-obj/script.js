// console.log(document.nodeName, document.nodeType, document.nodeValue);

let l = document.getElementById("name");
// console.log(l.attributes.length);
// for (let i of l.attributes) {
//   console.log(i.nodeName, i.nodeValue);
//   console.log(i.name, i.value);
// }

let b = document.getElementById("name");
// console.log(b.childNodes);
// console.log(b.children);

// for (let i of b.children) {
//   i.textContent = "common";
// }
// console.log(b.firstChild);
// console.log(b.firstElementChild);
// b.firstElementChild.textContent = "lsg";
// console.log(b.lastChild);
// console.log(b.lastElementChild);
// b.lastChild.textContent = " last child hu";
// console.log(b.childNodes);
// console.log(b.lastChild.previousSibling);
// console.log(b.lastChild.previousElementSibling);
// console.log(b.firstChild.nextSibling);
// console.log(b.firstChild.nextElementSibling);

// let btn = document.createElement("button");

// let txt = document.createTextNode("Hi am text node");

// btn.appendChild(txt);
// console.log(btn);
// let cmt = document.createComment("I am comment");

// let df = document.createDocumentFragment();
// console.log(df);

// let name = document.getElementById("name");
// let lal = document.getElementById("lalit");
// let d = document.getElementById("move");
// d.appendChild(lal);

// console.log(name);
// console.log(d);

// let btn = document.createElement("button");
// btn.textContent = "Button";
// console.log(btn);
let move = document.getElementById("move");
// move.appendChild(btn);
// console.log(move);

// let s = document.createComment("I am comment");
// move.appendChild(s);

let btn = document.createElement("button");
let txt = document.createTextNode("My Button");
let cmt = document.createComment("btn comment");
btn.appendChild(txt);
move.appendChild(btn);
move.appendChild(cmt);

console.log(move);
