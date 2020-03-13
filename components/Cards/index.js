// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    let cardContainer = document.querySelector(".cards-container");
    const data = response.data.articles;
    const boom = Object.values(data);
    boom.forEach(item => {
      item.forEach(article => {
        cardContainer.appendChild(makeCard(article));
      });
    });
  })
  .catch(error => {
    console.log("Sorry bud");
    console.log(error);
  });
//   ------------------------------------
// function arrayStuff(item) {
//   item.forEach(value => {
//     const article = document.createElement("div");
//     article.textContent = item;
//   });
// }
// ------------------------------------
function makeCard(object) {
  const div = document.createElement("div");
  div.classList.add("card");

  const div2 = document.createElement("div");
  div2.classList.add("headLine");
  div.appendChild(div2);
  div2.textContent = object.headline;

  const div3 = document.createElement("div");
  div3.classList.add("author");
  div.appendChild(div3);

  const div4 = document.createElement("div");
  div4.classList.add("img-container");
  div3.appendChild(div4);

  const img = document.createElement("img");
  div4.appendChild(img);
  img.src = object.authorPhoto;

  const newspan = document.createElement("span");
  div3.appendChild(newspan);
  newspan.textContent = object.authorName;

  return div;
}

// Create a function that will programmatically create the following DOM component:
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
