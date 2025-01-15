const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f"
const movieId = 240;
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("erreur de la requete");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("erreur:", error);
    });