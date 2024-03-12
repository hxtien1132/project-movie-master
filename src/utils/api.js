import axios from "axios";

const VITE_APP_TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTE1NDllY2E5ODQyNWQ4MmQzZDRiZWRiNzg5ZTAyYiIsInN1YiI6IjYzNTNhNTVjODgwYzkyMDA3OTZkNWRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGW7omIPI0kSJXM0xvSxuMdQNLqNSMfUlN2aW5lWJ - 8";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
