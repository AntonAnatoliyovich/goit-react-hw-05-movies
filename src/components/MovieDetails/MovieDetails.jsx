import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "services/fetchMovieById";
import { MovieDetailsSection } from "./MovieDetails.styled";
import { Container } from "index.styled";
import { Card } from "components/Card/Card";

const MovieDetails = () => {
	const [popularMovie, setPopularMovie] = useState(null);

	const { movieId } = useParams();

	useEffect(() => {
		const controller = new AbortController();
		fetchMovieById(movieId, controller.signal)
			.then(({ data }) => {
				if (!data) {
					throw new Error(data);
				}
				setPopularMovie(data);
			}).catch(error => {
				console.log(error);
			})
		
		return () => {
			controller.abort();
		}
	}, [movieId]);

	return (
		<MovieDetailsSection>
			<Container>
				{
					popularMovie &&
					<>
						<Card popularMovie={popularMovie} movieId={movieId} />
					</>
				}
			</Container>
		</MovieDetailsSection>
	)
}

export default MovieDetails;
