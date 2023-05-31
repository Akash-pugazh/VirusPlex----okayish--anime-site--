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
        limit: 10,
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

export async function getTopAnime() {
  const URL = "https://api.jikan.moe/v4/top/anime";
  try {
    const response = await axios.get(URL, {
      params: {
        limit: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrendingAnime() {}

export async function getPopularAnime() {
  const URL = "https://api.jikan.moe/v4/anime";
  try {
    const response = await axios.get(URL, {
      params: {
        limit: 10,
        order: "popularity",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAiringAnime() {
  const URL = "https://api.jikan.moe/v4/anime";
  try {
    const response = await axios.get(URL, {
      params: {
        limit: 10,
        status: "airing",
        start_data: 2023,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
