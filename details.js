const API_KEY = "9bbfd5e96b1e23a705a8fc51d36dc8e1";
const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
  .then(r => r.json())
  .then(movie => {
    const el = document.getElementById("details");
    el.innerHTML = `
      <h1>${movie.title}</h1>
      <img src="${IMG + movie.poster_path}">
      <p><strong>Lançamento:</strong> ${movie.release_date}</p>
      <p>${movie.overview}</p>
    `;
  });
