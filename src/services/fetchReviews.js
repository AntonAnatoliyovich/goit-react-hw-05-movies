import axios from "axios";

import { API_KEY } from "constants/apiKey";

export const fetchReviews = async (movieId, signal) => {
	try {
		return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
			signal,
			params: {
				api_key: API_KEY,
			},
		});
	} catch (error) {
		console.log(error);
		return error;
	}
}
