const img = document.querySelector("img");
const apiKey = process.env.GIPHY_API_KEY;
function fetchGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
const button = document.querySelector("button");
button.addEventListener("click", fetchGif);
fetchGif();
