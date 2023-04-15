import axios from "axios";

import { API_KEY } from "constants/apiKey";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";

export const fetchPopularMovies = async (signal) => {
	try {
		return await axios.get("", {
			signal,
			params: {
				api_key: API_KEY,
			}
		})
	} catch (error) {
		console.log(error);
		return error;
	}
}
