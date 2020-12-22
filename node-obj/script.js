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
console.log(b.firstChild.nextElementSibling);
