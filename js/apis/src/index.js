const img = document.querySelector("img");
const apiKey = process.env.GIPHY_API_KEY;
function fetchGif(search) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}`,
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      if (response.ok) return response.json();
      alert("An issue occured, please check your key");
      return Promise.reject(response);
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}
const button = document.querySelector("button");
const searchField = document.querySelector("#search");
button.addEventListener("click", () => {
  fetchGif(searchField.value);
});
fetchGif();
