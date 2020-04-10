// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const container = document.createElement("div");
  container.classList.add("header");

  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = "SMARCH 28, 2019";
  container.appendChild(span);

  const title = document.createElement("h1");
  title.textContent = "Lambda Times";
  container.appendChild(title);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = "98°";
  container.appendChild(span2);

  return container;
}

document.querySelector(".header-container").appendChild(Header());
