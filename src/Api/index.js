import axios from "axios";

export async function testApi() {
  const URL = "https://kitsu.io/api/edge/trending/anime";
  try {
    const response = await axios.get(URL, {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function searchAnime(searchValue) {
  const URL = "https://api.jikan.moe/v4/anime";
  try {
    const response = await axios.get(URL, {
      params: {
        q: searchValue,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAnimeDetails(AnimeId) {
  const URL = `https://api.jikan.moe/v4/anime/${AnimeId}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
