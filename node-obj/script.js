// console.log(document.nodeName, document.nodeType, document.nodeValue);

// let l = document.getElementById("name");
// console.log(l.attributes.length);
// for (let i of l.attributes) {
//   console.log(i.nodeName, i.nodeValue);
//   console.log(i.name, i.value);
// }

// let b = document.getElementById("name");
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
// let move = document.getElementById("move");
// move.appendChild(btn);
// console.log(move);

// let s = document.createComment("I am comment");
// move.appendChild(s);

// let btn = document.createElement("button");
// let txt = document.createTextNode("My Button");
// let cmt = document.createComment("btn comment");
// btn.appendChild(txt);
// move.appendChild(btn);
// move.appendChild(cmt);

// console.log(move);

// let df = document.createDocumentFragment();

// let title = document.createElement("h2");
// title.textContent = "Please click below btn";

// let btn = document.createElement("button");
// btn.textContent = "Click Here";

// df.appendChild(title);
// df.appendChild(btn);
// move.appendChild(df);
// console.log(df);

// let f = document.createTextNode("I");
// let s = document.createTextNode("AM");
// let t = document.createTextNode("IM");

// move.appendChild(f);
// move.appendChild(s);
// move.appendChild(t);

// move.normalize();

// console.log(move.childNodes);

// let n = document.getElementById("div1").lastElementChild;
// let p = document.getElementById("div2");
// let l = p.lastElementChild;

// let newbtn = document.createElement("button");
// newbtn.textContent = "New Btn";

// p.insertBefore(n, l);

// console.log(p);

// let a = document.getElementById("div1").lastElementChild;
// let b = document.getElementById("div2").lastElementChild;
// b.insertAdjacentElement("beforebegin", a);

// let c = document.createElement("button");
// c.textContent = "Added";

// b.insertAdjacentElement("afterend", c);

// let b = document.getElementById("div2");
// let html = "<hr />";
// b.insertAdjacentHTML("afterend", html);
// b.insertAdjacentHTML("beforebegin", html);

// let b = document.getElementById("div2").lastElementChild;
// let text = "Iron Man";

// b.insertAdjacentText("beforebegin", text);
// b.insertAdjacentText("afterend", text);
