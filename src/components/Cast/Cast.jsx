import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "services/fetchMovieCredits";

const Cast = () => {

	const { movieId } = useParams();
	console.log(movieId);

	const [cast, setCast] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchMovieCredits(movieId, controller.signal)
			.then(({ data }) => {
				if (!data) {
					throw new Error(data);
				}
				setCast(data.cast);
				console.log(data);
			}).catch(error => {
				console.log(error);
			})
		
		return () => {
			controller.abort();
		}
	}, [movieId]);

	return (
		<>
			{
				cast.length > 0 &&
				<ul>
					{
						cast.map(actor => <li key={actor.id} >{actor.original_name}</li>)
					}
				</ul>
			}
		</>
	)
}

export default Cast;
