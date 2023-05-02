import axios from "axios";

const searchAnimeFetcher = async animeName => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime", {
      params: {
        q: animeName,
      },
    });
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const airingAnimeFetcher = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
      params: {
        filter: "airing",
        limit: 15,
      },
    });
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { searchAnimeFetcher, airingAnimeFetcher };
