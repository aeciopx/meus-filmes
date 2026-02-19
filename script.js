const API_KEY = "9bbfd5e96b1e23a705a8fc51d36dc8e1";
const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w300";

/* Carregar categorias */
async function carregarCategoria(endpoint, containerId) {
  const res = await fetch(`${BASE}${endpoint}?api_key=${API_KEY}&language=pt-BR`);
  const data = await res.json();

  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.results.forEach(movie => {
    if (!movie.poster_path) return;

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

/* Pesquisa */
async function pesquisarFilme(query) {
  const res = await fetch(`${BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`);
  const data = await res.json();

  const section = document.getElementById("searchSection");
  const container = document.getElementById("searchResults");

  container.innerHTML = "";
  section.style.display = "block";

  data.results.forEach(movie => {
    if (!movie.poster_path) return;

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

/* Evento da barra de pesquisa */
const input = document.getElementById("searchInput");

input.addEventListener("keyup", function() {
  const value = input.value.trim();

  if (value.length > 2) {
    pesquisarFilme(value);
  } else {
    document.getElementById("searchSection").style.display = "none";
  }
});

/* Carregar categorias iniciais */
carregarCategoria("/movie/popular", "popular");
carregarCategoria("/movie/now_playing", "now_playing");
carregarCategoria("/movie/top_rated", "top_rated");
