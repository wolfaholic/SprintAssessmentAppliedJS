// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {

        const newsEntry = document.querySelector('.cards-container');
        let lambdaArt = Object.values(response.data.articles);
        lambdaArt.forEach(element => {
            element.forEach(art => {
                newsEntry.appendChild(articleEntry(art));
                console.log("newsEntry");
            })
        })
    })
    .catch((error) => {
        console.log(error);
    })


function articleEntry(data) {
    ///elements
    const article = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgWrap = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorSig = document.createElement('span');


    ///appending
    article.appendChild(headLine);
    article.appendChild(author);
    author.appendChild(imgWrap);
    author.appendChild(authorSig);
    imgWrap.appendChild(authorImg);

    ///class List
    article.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgWrap.classList.add('img-container');

    //contnet
    headLine.textContent = data.headline;
    authorSig.textContent = `By ${data.authorName}`;
    authorImg.src = data.authorPhoto;


    return article;

}