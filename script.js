const API_KEY = "9bbfd5e96b1e23a705a8fc51d36dc8e1";
const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w300";

async function carregarFilmes() {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
  const data = await res.json();

  const container = document.getElementById("movies");
  container.innerHTML = "";

  data.results.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${IMG + movie.poster_path}" alt="${movie.title}">
    `;

    div.onclick = () => {
      window.location.href = `details.html?id=${movie.id}`;
    };

    container.appendChild(div);
  });
}

carregarFilmes();
