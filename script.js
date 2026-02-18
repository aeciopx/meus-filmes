const API_KEY = "SUA_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

function fetchCategory(endpoint, containerId) {
  fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`)
    .then(res => res.json())
    .then(data => {
      console.log(data); // mostra no console
      const container = document.getElementById(containerId);
      data.results.forEach(movie => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${movie.title}</p>`;
        container.appendChild(div);
      });
    })
    .catch(err => console.error("Erro:", err));
}

fetchCategory("/movie/popular", "popular");
