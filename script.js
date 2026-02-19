const apiKey = "9bbfd5e96b1e23a705a8fc51d36dc8e1";
const baseUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function getMovies(endpoint, containerId) {
    fetch(`${baseUrl}${endpoint}?api_key=${apiKey}&language=pt-BR`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById(containerId);
            container.innerHTML = "";

            data.results.forEach(movie => {
                const div = document.createElement("div");
                div.classList.add("movie");

                div.innerHTML = `
                    <a href="details.html?id=${movie.id}">
                        <img src="${imageUrl + movie.poster_path}" alt="${movie.title}">
                    </a>
                `;

                container.appendChild(div);
            });
        });
}

getMovies("/movie/popular", "popular");
getMovies("/movie/now_playing", "now_playing");
getMovies("/movie/top_rated", "top_rated");
