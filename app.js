// import fetch from "node-fetch";

const title = document.querySelector("#title");
const container = document.querySelector("#container");

const url = "http://localhost:3000/api/v1/articles";

console.log("Hello World");

async function getArticles() {
  let response = await fetch(url);
  let data = await response.json();

  const cleanedData = Object.keys(data).map((key) => data[key]);
  const articles = cleanedData[2];

  let mappedArticles = articles
    .map((article, index) => {
      return `<div class="article" key=${index}>
    <h2>${article.title}</h2>
    <p>${article.body}</p>
    </div>`;
    })
    .join("");

  container.innerHTML = mappedArticles;
}

console.log(getArticles());
