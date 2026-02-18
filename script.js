const API_KEY = "SUA_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

function fetchCategory(endpoint, containerId) {
  fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById(containerId);
      container.innerHTML = "";
      data.results.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
          <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
        `;
        container.appendChild(div);
      });
    });
}

fetchCategory("/movie/popular", "popular");
fetchCategory("/movie/now_playing", "now_playing");
fetchCategory("/movie/top_rated", "top_rated");
