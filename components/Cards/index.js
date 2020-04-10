// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response.data.articles);
    console.log(Object.values(response.data.articles));

    Object.values(response.data.articles).forEach((item) => {
      item.forEach((item2) => {
        cardMaker(item2);

        document
          .querySelector(".cards-container")
          .appendChild(cardMaker(item2));
      });
    });
  });

function cardMaker(item) {
  const container = document.createElement("div");
  container.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = item.headline;
  container.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  container.appendChild(author);

  const small = document.createElement("div");
  small.classList.add("img-container");
  author.appendChild(small);

  const pic = document.createElement("img");
  pic.src = item.authorPhoto;
  small.appendChild(pic);

  const name = document.createElement("span");
  name.textContent = item.authorName;
  headline.appendChild(name);
  return container;
}
