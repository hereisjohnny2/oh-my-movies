import TMDBApi from "../shared/TMDBApi";

const API_KEY = "696d88d8009e5f9ec856621163017e4a";

export function getMovieByTitle(title: string, page = 1) {
  return TMDBApi.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query: title,
      page,
      language: "en-US",
      include_adult: "false"
    }
  });
}