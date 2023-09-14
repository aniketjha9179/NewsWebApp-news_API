// const API_Key = "aee91a03a07d41de8ba858192178dcc6";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener("load", () => fetchNews("India"));

// function reload(){
//     window.location.reload();
// }

// async function fetchNews(query) {
//   const res = await fetch(`${url}${query}&apikey=${API_Key}`);
//   const data = await res.json();
//   bindData(data.articles);
// }

// function bindData(articles) {
//   const cardsContainer = document.getElementById("cards-container");
//   const newsCardTemplate = document.getElementById("template-news-card");

//   //creating empty conatainer
//   cardsContainer.innerHTML = "";

//   articles.forEach((article) => {
//     if (!article.urlToImage) return;
//     //deep clone
//     const cardClone = newsCardTemplate.content.cloneNode(true);
//     fillDataInCard(cardClone, article);
//     cardsContainer.appendChild(cardClone);
//   });
// }
//       //add json data to cards 
// function fillDataInCard(cardClone, article) {
//   const newsImg = cardClone.querySelector("#news-img");
//   const newsTitle = cardClone.querySelector("#news-title");
//   const newsSource = cardClone.querySelector("#news-source");
//   const newsDesc = cardClone.querySelector("#News-Desc");

//   //provide image source/title /and description about news
//   newsImg.src = article.urlToImage;
//   newsTitle.innerHTML = article.title;
//   newsDesc.innerHTML = article.description;

//   //getting release time of the news converting to local time 
//   const data = new Date(article.publishedAt).toLocaleString("en-US", {
//     timeZone: "Asia/Jakarta",
//   });

//   newsSource.innerHTML = `${article.source.name} - ${data} `;

//   cardClone.firstElementChild.addEventListener("click", () => {
//     window.open(article.url, "_blank");
//   });
// }




// const curSelectedNav = null;
//       //id/searchQuery
// function onNavItemClick(id){
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav = navItem;
//     curSelectedNav.classList.add('active');

// }


// const searchButton = document.getElementById('search-button');
// const searchText = document.getElementById('search-text');

// searchButton.addEventListener('click',()=>{
//     const query= searchText.value;
//     if(!query) return;
//     fetchNews(query);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav= null;



// })

const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const apiKey = await getAPIKey();
  const res = await fetch(`${url}${query}&apiKey=${apiKey}`);
  const data = await res.json();
  bindData(data.articles);
}

async function getAPIKey() {
  const response = await fetch("api-key.json");
  const data = await response.json();
  return data.apiKey;
}

function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  //creating empty container
  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    //deep clone
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

//add JSON data to cards 
function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#News-Desc");

  //provide image source/title/description about news
  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  //getting release time of the news converting to local time 
  const data = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} - ${data} `;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

const curSelectedNav = null;
//id/searchQuery
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove('active');
  curSelectedNav = navItem;
  curSelectedNav.classList.add('active');
}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');

searchButton.addEventListener('click', () => {
  const query = searchText.value;
  if (!query) return;
  fetchNews(query);
  curSelectedNav?.classList.remove('active');
  curSelectedNav = null;
});
