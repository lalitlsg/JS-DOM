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

// let a = document.getElementById("div2");
// let n = "<p>Changed</p>";
// a.innerHTML = n;

// let a = document.getElementById("div2");
// console.log(a.outerHTML);
// a.outerTML = "<b>outerHTML</b>";
// console.log(a);
// let a = document.getElementById("div2").firstElementChild;
// a.innerText = "Third";

// let a = document.getElementById("div2");
// let b = a.cloneNode(true);
// let c = document.getElementById("div3");
// c.appendChild(b);

// let a = document.getElementById("div2");
// a.removeChild(a.lastElementChild);

// let a = document.getElementById("div1").lastElementChild;
// let b = document.getElementById("div2");
// let c = document.createElement("button");
// c.textContent = "New Btn";
// b.replaceChild(a, b.lastElementChild);

// let a = document.getElementById("div2").firstElementChild.firstChild;
// console.log(a.data);
// a.data = "Third";
// a.appendData("-Third");

// a.deleteData(0, 3);

// a.insertData(3, "Hi");

// a.replaceData(0, 3, "Third");

// let r = a.splitText(3);
// console.log(r);

// let r = a.substringData(0, 3);
// console.log(r);

let a = document.getElementById("div3").firstElementChild;
// console.log(a);
// console.log(a.className);
// a.className = "all";
// console.log(a);

// console.log(a.attributes);
// for(let i of a.attributes){
//     console.log(i)
// }

// a.setAttribute("id", "new-id");
// a.setAttribute("style", "color: red");

// console.log(a.getAttribute("id"));

// a.removeAttribute("id");
// console.log(a.hasAttribute("id"));
// console.log(a);

// a.style.color = "green";
// a.style.backgroundColor = "grey";

// a.className = "cl2";
// console.log(a.classList.item(0));
// a.classList.replace("cl1", "cl2");
// a.classList.remove("cl2");
// console.log(a.classList.contains("cl1"));

// a.classList.toggle("cl2");
// a.classList.toggle("cl2");

// let cs = a.style;
// cs.cssText = "font-size: 30px";
// console.log(cs.length);

// console.log(cs[0]);
// console.log(cs.getPropertyValue("color"));

// cs.removeProperty("color");

// cs.setProperty("font-size", "30px", "important");

// console.log(cs.getPropertyPriority("font-size"));

let p = window.getComputedStyle(a);
console.log(p.color);
