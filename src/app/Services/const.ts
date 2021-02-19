

const app_data = {
    netfix_logo: "https://logotyp.us/file/netflix.svg",
    netflix_background: "https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg",
    avatar: "../../assets/avatar.jpg",
    apikey: "af8b62df"
}

const endPoints = {
    latestMovies: "http://www.omdbapi.com/?s=Avengers&apikey=af8b62df",
    favorateMovies: "http://www.omdbapi.com/?s=The+Dark+Knight&apikey=af8b62df",
    registerUser: "http://localhost:3000/api/register",
    loginUser: "http://localhost:3000/api/login"
}

export const { netfix_logo, netflix_background, avatar, apikey } = app_data;

export const { latestMovies, favorateMovies, registerUser, loginUser } = endPoints;

