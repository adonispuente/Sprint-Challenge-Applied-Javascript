// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const head = document.createElement("div");
  head.classList.add("header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = "SMARCH 28, 2019";
  head.appendChild(span1);

  const times = document.createElement("h1");
  times.textContent = "Lambda Times";
  head.appendChild(times);

  const span2 = document.createElement("span");
  span2.textContent = "98°";
  span2.classList.add("temp");
  head.appendChild(span2);

  return head;
}
const BigHead = document.querySelector(".header-container");
BigHead.appendChild(Header());
