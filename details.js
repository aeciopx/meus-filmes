const API_KEY = "9bbfd5e96b1e23a705a8fc51d36dc8e1";
const BASE = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function carregarDetalhes() {
  const movieRes = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  const movie = await movieRes.json();

  const videoRes = await fetch(`${BASE}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`);
  const videos = await videoRes.json();

  let trailer = videos.results.find(v => v.type === "Trailer" && v.site === "YouTube");

  const el = document.getElementById("details");

  el.innerHTML = `
    <h1>${movie.title}</h1>
    <img src="${IMG + movie.poster_path}">
    <p><strong>Lançamento:</strong> ${movie.release_date}</p>
    <p><strong>Categorias:</strong> ${movie.genres.map(g => g.name).join(", ")}</p>
    <p>${movie.overview}</p>

    ${
      trailer
        ? `<h2>Trailer</h2>
           <iframe width="560" height="315"
             src="https://www.youtube.com/embed/${trailer.key}"
             frameborder="0"
             allowfullscreen>
           </iframe>`
        : `<p>Trailer não disponível.</p>`
    }
  `;
}

carregarDetalhes();
