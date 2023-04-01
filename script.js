let button = document.getElementById("btn");
button.addEventListener("click", contents);

function contents() {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-03-01&sortBy=publishedAt&apiKey=a6372a2cd00b4b5e8d8e6dde1179c531"
  )
    .then((res) => res.json())
    .then((data) => {
      let posts = data.articles
        .map(
          (item) => `<div id="mainContainer">
             <img id="contentImg" src="${item.urlToImage}" />
             <h1 id="author">${item.author}s</h1>
             <h4 id="title">${item.title}</h4>
            <p id="description">${item.description}</p>
            <p id="content">${item.content}<p>
            <h6 id="publishedAt">${item.publishedAt}</h6>
           </div>`
        )
        .join("");
      document.getElementById("allPosts").innerHTML = posts;
      document.getElementById("allPosts").style.backgroundColor = "brown";
    });
}
