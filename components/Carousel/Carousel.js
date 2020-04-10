/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

pictures = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg",
];
function carousel(item) {
  const container = document.createElement("div");
  container.classList.add("carousel");

  const div = document.createElement("div");
  div.classList.add("left-button");
  container.appendChild(div);

  div.addEventListener("click", (event) => {});

  const pic = document.createElement("img");
  pic.src = item;
  container.appendChild(pic);

  const rightBttn = document.createElement("right-button");
  rightBttn.classList.add("right-button");
  container.appendChild(rightBttn);

  return container;
}

pictures.forEach((item) => {
  carousel(item);

  document.querySelector(".carousel-container").appendChild(carousel(item));
});

// const pic2 = document.createElement("img");
// pic2.src = "./assets/carousel/computer.jpeg";
// container.appendChild(pic2);

// const pic3 = document.createElement("img");
// pic3.src = "./assets/carousel/trees.jpeg";
// container.appendChild(pic3);

// const pic4 = document.createElement("img");
// pic4.src = "./assets/carousel/turntable.jpeg";
// container.appendChild(pic4);
