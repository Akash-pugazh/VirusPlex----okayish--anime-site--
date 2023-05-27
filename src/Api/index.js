import axios from "axios";

export default async function testApi() {
  const URL = "https://kitsu.io/api/edge/trending/anime";
  try {
    const response = await axios.get(URL, {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      params: {
        q: "Naruto",
      },
    });
    return response.data
  } catch (err) {
    console.error(err);
  }
}
