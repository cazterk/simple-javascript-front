// import fetch from "node-fetch";

const title = document.querySelector("#title");
const body = document.querySelector("#body");

const url = "http://localhost:3000/api/v1/articles";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("Hello World");
